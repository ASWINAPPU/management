import { Component, OnInit } from '@angular/core';
import { MenubarInterface } from '../interfaces/menubar-interfaces';
@Component({
  selector: 'app-menubar-container',
  templateUrl: './menubar-container.component.html',
  styleUrls: ['./menubar-container.component.css']
})
export class MenubarContainerComponent implements OnInit {
  showMenu: boolean = false;
  showSideBar: boolean = true;
  menuItems: Array<MenubarInterface> = [
    {
      submenu: [],
      hasSubMenu: false,
      showMenu: false,
      path: '',
      name: 'Dashboard'
    },
    {
      submenu: ['HTML & CSS','JavaScript','PHP & MySQL'],
      hasSubMenu: true,
      showMenu: false,
      path: '',
      name: 'Category'
    },
    {
      submenu: ['Web Design','Login Form','Card Design'],
      hasSubMenu: true,
      showMenu: false,
      path: '',
      name: 'Posts'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
  clickBoxMenu() {
    console.log('clickBoxMenu')
    this.showSideBar = !this.showSideBar;
}
