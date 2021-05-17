
import { ComponentFixture	} from '@angular/core/testing';
import { TestBed			} from '@angular/core/testing';
import { MifeComponent		} from './mife.component';


describe('MifeComponent', () => {
	let component:	MifeComponent;
	let fixture:	ComponentFixture<MifeComponent>;
	
	beforeEach(async () => await TestBed.configureTestingModule({declarations: [MifeComponent]}).compileComponents());
	
	beforeEach(() => {
		fixture		= TestBed.createComponent(MifeComponent);
		component	= fixture.componentInstance;
		
		fixture.detectChanges()
	});
	
	it('should create', () => { expect(component).toBeTruthy() })
})
