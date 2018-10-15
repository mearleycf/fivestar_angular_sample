import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerQuoteNumberComponent } from './container-quote-number.component';

describe('ContainerQuoteNumberComponent', () => {
  let component: ContainerQuoteNumberComponent;
  let fixture: ComponentFixture<ContainerQuoteNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerQuoteNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerQuoteNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
