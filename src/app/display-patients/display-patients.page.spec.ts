import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayPatientsPage } from './display-patients.page';

describe('DisplayPatientsPage', () => {
  let component: DisplayPatientsPage;
  let fixture: ComponentFixture<DisplayPatientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPatientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayPatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
