

import { waitForAsync			} from '@angular/core/testing';
import { ComponentFixture		} from '@angular/core/testing';
import { TestBed				} from '@angular/core/testing';
import { ContentFullComponent	} from './content-full.component';

describe('ContentFullComponent', () => {
	let component:	ContentFullComponent;
	let fixture:	ComponentFixture<ContentFullComponent>;
	beforeEach( waitForAsync(() => {TestBed.configureTestingModule({ declarations: [ContentFullComponent]}).compileComponents()}));
	beforeEach(() => {
		fixture		= TestBed.createComponent( ContentFullComponent );
		component	= fixture.componentInstance;
		fixture.detectChanges()
	});
	it('should create', () => { expect(component).toBeDefined()})
	// it('should create', () => { expect(component ).toBeTruthy()})
})
