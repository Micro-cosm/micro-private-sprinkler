

import { ComponentFixture 	} from '@angular/core/testing';
import { TestBed 			} from '@angular/core/testing';
import { ContentComponent	} from 'src/app/content/content.component';

describe('ContentComponent', () => {
	let component:	ContentComponent;
	let fixture:	ComponentFixture<ContentComponent>;
	beforeEach(() => {TestBed.configureTestingModule({declarations: [ContentComponent]}).compileComponents()});
	beforeEach(() => {
		fixture		= TestBed.createComponent( ContentComponent );
		component	= fixture.componentInstance;
		fixture.detectChanges()
	});
	it('should create', () => { expect( component ).toBeTruthy()})
})
