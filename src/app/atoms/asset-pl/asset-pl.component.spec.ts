import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPlComponent } from './asset-pl.component';

describe('AssetPlComponent', () => {
  let component: AssetPlComponent;
  let fixture: ComponentFixture<AssetPlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
