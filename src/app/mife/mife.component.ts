

import {Component, Input} from '@angular/core';
import { OnInit		} from '@angular/core';

@Component({
	selector: 'app-mife',
	templateUrl: './mife.component.html',
	styleUrls: ['./mife.component.sass']
})


export class MifeComponent implements OnInit {
	testAddr = "10.0.0.43";
	
	@Input() lightOn = true;
	@Input() sprinklerOn: boolean[][] = [[false, false, false, false], [false, false, false, false]];
	
	constructor() { }
	
	ngOnInit(): void {}
	
	light( action: boolean ) {
		this.lightOn = action;
	}
	
	sprinkler( pod: number, zone: number, action: boolean ) {
		this.sprinklerOn[pod][zone] = action;
	}
}
