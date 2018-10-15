import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesQuotesComponent } from './quotes.component';

describe('PagesQuotesComponent', () => {
  let component: PagesQuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
