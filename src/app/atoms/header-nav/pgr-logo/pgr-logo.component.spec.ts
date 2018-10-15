import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrLogoComponent } from './pgr-logo.component';

describe('PgrLogoComponent', () => {
  let component: PgrLogoComponent;
  let fixture: ComponentFixture<PgrLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
