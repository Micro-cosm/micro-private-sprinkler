

import { environment		} from '../environments/environment';
import { Component			} from '@angular/core';
import { AngularFireAuth	} from '@angular/fire/auth';
import { Title				} from '@angular/platform-browser';
import { Router				} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	env: any;
	
	constructor(
		public	auth:			AngularFireAuth,
		public	router:			Router,
		private titleService:	Title
	) {
		this.env = environment;
		console.log( 'Hosting environment:', this.env );
		this.titleService.setTitle( this.env.title )
	}
}
