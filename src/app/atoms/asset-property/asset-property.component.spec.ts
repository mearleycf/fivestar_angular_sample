import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPropertyComponent } from './asset-property.component';

describe('AssetPropertyComponent', () => {
  let component: AssetPropertyComponent;
  let fixture: ComponentFixture<AssetPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
