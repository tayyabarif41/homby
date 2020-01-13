import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesBenefitsComponent } from './updates-benefits.component';

describe('UpdatesBenefitsComponent', () => {
  let component: UpdatesBenefitsComponent;
  let fixture: ComponentFixture<UpdatesBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
