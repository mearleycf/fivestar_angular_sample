import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCheckboxGroupComponent } from './type-checkbox-group.component';

describe('TypeCheckboxGroupComponent', () => {
  let component: TypeCheckboxGroupComponent;
  let fixture: ComponentFixture<TypeCheckboxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCheckboxGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
