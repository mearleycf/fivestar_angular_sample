import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceButtonComponent } from './advance-button.component';

describe('AdvanceButtonComponent', () => {
  let component: AdvanceButtonComponent;
  let fixture: ComponentFixture<AdvanceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
