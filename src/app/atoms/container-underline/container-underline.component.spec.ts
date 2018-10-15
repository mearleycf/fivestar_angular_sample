import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerUnderlineComponent } from './container-underline.component';

describe('ContainerUnderlineComponent', () => {
  let component: ContainerUnderlineComponent;
  let fixture: ComponentFixture<ContainerUnderlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerUnderlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
