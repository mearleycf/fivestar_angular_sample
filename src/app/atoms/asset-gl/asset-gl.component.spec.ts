import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetGlComponent } from './asset-gl.component';

describe('AssetGlComponent', () => {
  let component: AssetGlComponent;
  let fixture: ComponentFixture<AssetGlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetGlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetGlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
