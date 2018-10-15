import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlquestionsComponent } from './addlquestions.component';

describe('AddlquestionsComponent', () => {
  let component: AddlquestionsComponent;
  let fixture: ComponentFixture<AddlquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
