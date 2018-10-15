import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { March21p2Component } from './march21p2.component';

describe('March21p2Component', () => {
  let component: March21p2Component;
  let fixture: ComponentFixture<March21p2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ March21p2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(March21p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
