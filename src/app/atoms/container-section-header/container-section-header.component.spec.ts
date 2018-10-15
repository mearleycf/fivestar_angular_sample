import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSectionHeaderComponent } from './container-section-header.component';

describe('ContainerSectionHeaderComponent', () => {
  let component: ContainerSectionHeaderComponent;
  let fixture: ComponentFixture<ContainerSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
