import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarItemsComponent } from './menubar-items.component';

describe('MenubarItemsComponent', () => {
  let component: MenubarItemsComponent;
  let fixture: ComponentFixture<MenubarItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubarItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
