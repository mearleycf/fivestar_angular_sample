import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageWorkersComponent } from './coverage-workers.component';

describe('CoverageWorkersComponent', () => {
  let component: CoverageWorkersComponent;
  let fixture: ComponentFixture<CoverageWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
