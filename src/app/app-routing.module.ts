

import { NgModule				} from '@angular/core';
import { RouterModule			} from '@angular/router';
import { Routes					} from '@angular/router';
import { AuthGuard				} from './_guards/auth.guard';
import { HomeComponent			} from './home/home.component';
import { LoggedOutComponent		} from './logged-out/logged-out.component';
import { LoginComponent			} from './login/login.component';
import { ContentComponent		} from './content/content.component';
import { ContentFullComponent	} from './content-full/content-full.component';
import { MifeComponent			} from "./mife/mife.component";
// import { LoggedInGuard	} from 'ngx-auth-firebaseui';			// INHERIT 'canActivate' FROM ngx-auth-firebaseui

export const routes: Routes = [
	{ path: '',		redirectTo: '/home', pathMatch: 'full' 											},
	{ path: 'logged-out',			component: LoggedOutComponent									},
	{ path: 'login',				component: LoginComponent										},
	{ path: 'home',					component: HomeComponent,			canActivate: [AuthGuard]	},
	{ path: 'mife',					component: MifeComponent,			canActivate: [AuthGuard]	},
	{ path: 'content/:page',		component: ContentComponent,		canActivate: [AuthGuard]	},
	{ path: 'content-full/:page',	component: ContentFullComponent,	canActivate: [AuthGuard]	},
	{ path: '**',	redirectTo: '/home'																}
];

@NgModule({
	imports: [RouterModule.forRoot( routes, { enableTracing: false, useHash: true })],
	exports: [RouterModule]
})

export class AppRoutingModule {}
