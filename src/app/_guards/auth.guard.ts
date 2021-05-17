

import { environment					} from '../../environments/environment';
import { ActivatedRouteSnapshot			} from '@angular/router';
import { CanActivate					} from '@angular/router';
import { Inject							} from '@angular/core';
import { Injectable						} from '@angular/core';
import { Router							} from '@angular/router';
import { RouterStateSnapshot			} from '@angular/router';
import { AuthProcessService				} from 'ngx-auth-firebaseui';
import { NgxAuthFirebaseUIConfig		} from 'ngx-auth-firebaseui';
import { NgxAuthFirebaseUIConfigToken	} from 'ngx-auth-firebaseui';
import { map							} from 'rxjs/operators';
import { Observable						} from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
	env:	any;
	
	constructor(
		@Inject( NgxAuthFirebaseUIConfigToken )
		private config:			NgxAuthFirebaseUIConfig,
		private router:			Router,
		private authProcess:	AuthProcessService
	) {
		this.env = environment
		if ( this.env.debug ) console.log( '>> AuthGuard -> constructing -> config:', config );
	}
	
	canActivate(
		route:	ActivatedRouteSnapshot,
		state:	RouterStateSnapshot
	): Observable<boolean> {
		if ( this.env.debug ) console.log( '>> AuthGuard -> canActivate -> router state:', state );

		return this.authProcess.afa.user.pipe( map( user => {
			if ( this.env.logs )	console.log('>> AuthGuard -> canActivate -> user:', user);
			if ( this.env.debug )	console.log('>> AuthGuard -> canActivate -> config:', this.config);
			if ( user ) {
				if (
					this.config.guardProtectedRoutesUntilEmailIsVerified  &&
					this.env.remote  &&  !user.emailVerified  &&  !user.isAnonymous
				) {
					console.log( 'Oops...  You are logged in to a remote system with an account that has an unverified email address.' );
					if ( this.env.debug ) console.log( '>>> AuthGuard -> Redirecting to:', this.env.authGuardRemoteFallbackURL );
					window.location.href = this.env.authGuardRemoteFallbackURL;
				}
				return true
			} else {
				if ( this.env.local ) {
					console.log('>>> AuthGuard -> canActivate?   NoSoFoYo');
					if ( this.env.debug ) console.log('>>> AuthGuard -> ACCESS DENIED -> Redirecting to:', this.env.authGuardRemoteFallbackURL);
					this.router.navigate(["/login"]).then()
				} else {
					console.log('>>> AuthGuard -> canActivate?   NoSoFoYo');
					if ( this.env.debug ) console.log('>>> AuthGuard -> ACCESS DENIED -> Redirecting to:', this.env.authGuardRemoteFallbackURL);
					window.location.href = this.env.authGuardRemoteFallbackURL + "?returnUrl=" + this.env.mife.this;
				}
			}
		}))
	}
}
