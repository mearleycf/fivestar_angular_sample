import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCheckboxComponent } from './type-checkbox.component';

describe('TypeCheckboxComponent', () => {
  let component: TypeCheckboxComponent;
  let fixture: ComponentFixture<TypeCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
