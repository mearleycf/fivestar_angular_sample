import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveragePropertyComponent } from './coverage-property.component';

describe('CoveragePropertyComponent', () => {
  let component: CoveragePropertyComponent;
  let fixture: ComponentFixture<CoveragePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoveragePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveragePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
