import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAutocompleteComponent } from './type-autocomplete.component';

describe('TypeAutocompleteComponent', () => {
  let component: TypeAutocompleteComponent;
  let fixture: ComponentFixture<TypeAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
