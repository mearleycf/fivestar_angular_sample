import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTextComponent } from './menu-text.component';

describe('MenuTextComponent', () => {
  let component: MenuTextComponent;
  let fixture: ComponentFixture<MenuTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
