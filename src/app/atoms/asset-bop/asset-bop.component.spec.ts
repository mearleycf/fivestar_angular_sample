import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetBopComponent } from './asset-bop.component';

describe('AssetBopComponent', () => {
  let component: AssetBopComponent;
  let fixture: ComponentFixture<AssetBopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetBopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetBopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
