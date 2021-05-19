

import { environment		} from "../../environments/environment";
import { Component			} from '@angular/core';
import { Input				} from '@angular/core';
import { OnInit				} from '@angular/core';
import { HttpClient			} from "@angular/common/http";

@Component({
	selector: 'app-mife',
	templateUrl: './mife.component.html',
	styleUrls: ['./mife.component.sass']
})


export class MifeComponent implements OnInit {
	env:	any;
	@Input()	status: any;
	@Input()	lightOn		= [true, "/led/"];
	@Input()	zoneImage	= "/assets/images/lot1.png"
	@Input()	sprinklerOn	= [
		[[false, "/pod/1/zone/1/action/"], [false, "/pod/1/zone/2/action/"], [false, "/pod/1/zone/3/action/"], [false, "/pod/1/zone/4/action/"]],
		[[false, "/pod/2/zone/1/action/"], [false, "/pod/2/zone/2/action/"], [false, "/pod/2/zone/3/action/"], [false, "/pod/2/zone/4/action/"]]
	];
	
	constructor( private http: HttpClient ) { this.env = environment }
	
	ngOnInit(): void {
		this.getStatus().subscribe(data => {
			this.status = data
			console.log("Status Check:", typeof this.status, this.status)
		});
	}
	
	getStatus() {
		const actionUrl = this.env.this.host + "/api/stat";
		console.log("status request:", actionUrl);
		return this.http.get(actionUrl, {observe: 'body', responseType: 'text'})
	}
	
	changeImage( zone: string ) {
		this.zoneImage = "/assets/images/" + zone + ".png";
	}
	
	setLight( action: boolean ) {
		this.lightOn[0] 	= action;
		let actionUrl		= this.env.this.host + '/api' + this.lightOn[1];
		if ( this.lightOn[0] ) { actionUrl += "1" } else { actionUrl += "0" }
		
		console.log("led action:", actionUrl);
		this.http.get(actionUrl, {observe: 'body', responseType: 'text'}).subscribe(data => {
			this.status = data;
			console.log("API says:", data)
		})
	}
	
	setSprinkler( pod: number, zone: number, action: boolean ) {
		this.sprinklerOn[pod][zone][0]	= action;
		let actionUrl					= this.env.this.host + '/api' + this.sprinklerOn[pod][zone][1];
		if ( this.sprinklerOn[pod][zone][0] ) { actionUrl += "1" } else { actionUrl += "0" }
		
		console.log("sprinkler action:", actionUrl);
		this.http.get(actionUrl, {observe: 'body', responseType: 'text'}).subscribe(data => {
			this.status = data;
			console.log("API says:", data)
		})
	}
}
