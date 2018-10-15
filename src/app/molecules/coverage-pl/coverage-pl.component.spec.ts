import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveragePlComponent } from './coverage-pl.component';

describe('CoveragePlComponent', () => {
  let component: CoveragePlComponent;
  let fixture: ComponentFixture<CoveragePlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoveragePlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveragePlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
