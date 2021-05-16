

import { environment		} from '../../environments/environment';
import { ActivatedRoute		} from '@angular/router';
import { AngularFireAuth	} from '@angular/fire/auth';
import { Component			} from '@angular/core';
import { OnInit				} from '@angular/core';
import { Router				} from '@angular/router';
import { AuthProvider		} from 'ngx-auth-firebaseui';
import { Theme				} from 'ngx-auth-firebaseui';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
	env:			any;
	returnService:	string;
	controls:		any;
	email:			string;
	error:			boolean;
	index:			number;
	login:			false;
	password:		string;
	text:			string;
	title:			string;
	tosUrl:			string;
	min:			number;
	sendNewVerificationEmailText: string;
	verifyEmailGoBackText: string;
	
	themes					= Theme;
	providers				= AuthProvider;
	signOutText				= 'Confirm Logout?';
	resetPasswordTabText	= 'Reset e-mail address to password';
	resetPasswordInputText	= 'Reset e-mail address to password';
	nameText				= 'Name';
	emailText				= 'E-mail';
	emailErrorPatternText	= 'Please enter a valid e-mail address';
	registerButtonText		= 'Register';
	emailConfirmationText	=
		`A confirmation e-mail has been sent to you. Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.`;
	
	constructor(
		private	route:		ActivatedRoute,
		public	fireAuth:	AngularFireAuth,
		public	router:		Router
	) { this.env = environment }
	
	ngOnInit() { this.returnService = this.route.snapshot.params.returnService }

	onSuccess( event ) {
		if ( this.env.debug ) console.log( '>>LoginComponent -> onSuccess -> event:', event );
		
		this.error	= false;
		this.index	= 2;
		
		if ( this.returnService != null ) {
			console.log( '!!!!!!!!!!!!!!!!!! HEY! the return service is NOT null, its:', this.returnService, '<<<<<<<<<<<<<<<<<<<<<<<<<' );
			if ( this.returnService === 'private' ) {
				this.router.navigate(["/home"]).then()
			} else {
				window.location.replace("/" + this.returnService )
			}
		} else {
			if ( this.env.local ) {
				this.router.navigate(["/home"]).then()
			} else {
				console.log( '>>>>>>>>>>>>>>>>>>>>>>>>> Returning to whence:', this.returnService, '<<<<<<<<<<<<<<<<<<<<<<<<<' );
				window.location.replace( this.env.authGuardRemoteLoggedInURL )
			}
		}
	}
	
	onError( event ) {
		if ( this.env.debug ) console.log( '>>LoginComponent -> onError -> event:', event );
		this.error = true;
	}
	
	logout(): void { this.fireAuth.signOut().then( r => console.log( '>> LoginComponent -> signOut:', r ))}
	onSignOut(): void { console.log( 'Sign-out successful!' )}
}

