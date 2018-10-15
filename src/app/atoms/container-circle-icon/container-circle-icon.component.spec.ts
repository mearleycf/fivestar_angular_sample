import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCircleIconComponent } from './container-circle-icon.component';

describe('ContainerCircleIconComponent', () => {
  let component: ContainerCircleIconComponent;
  let fixture: ComponentFixture<ContainerCircleIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCircleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCircleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
