import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageBopComponent } from './coverage-bop.component';

describe('CoverageBopComponent', () => {
  let component: CoverageBopComponent;
  let fixture: ComponentFixture<CoverageBopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageBopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageBopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
