import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedPhoneComponent } from './combined-phone.component';

describe('CombinedPhoneComponent', () => {
  let component: CombinedPhoneComponent;
  let fixture: ComponentFixture<CombinedPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
