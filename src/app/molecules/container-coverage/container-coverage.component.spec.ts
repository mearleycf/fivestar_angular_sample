import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCoverageComponent } from './container-coverage.component';

describe('ContainerCoverageComponent', () => {
  let component: ContainerCoverageComponent;
  let fixture: ComponentFixture<ContainerCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
