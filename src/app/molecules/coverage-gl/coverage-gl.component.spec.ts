import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageGlComponent } from './coverage-gl.component';

describe('CoverageGlComponent', () => {
  let component: CoverageGlComponent;
  let fixture: ComponentFixture<CoverageGlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageGlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageGlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
