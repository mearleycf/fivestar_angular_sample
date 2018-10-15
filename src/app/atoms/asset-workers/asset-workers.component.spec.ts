import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetWorkersComponent } from './asset-workers.component';

describe('AssetWorkersComponent', () => {
  let component: AssetWorkersComponent;
  let fixture: ComponentFixture<AssetWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
