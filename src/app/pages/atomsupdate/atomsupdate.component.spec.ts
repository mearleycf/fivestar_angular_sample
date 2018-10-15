import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsupdateComponent } from './atomsupdate.component';

describe('AtomsupdateComponent', () => {
  let component: AtomsupdateComponent;
  let fixture: ComponentFixture<AtomsupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomsupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
