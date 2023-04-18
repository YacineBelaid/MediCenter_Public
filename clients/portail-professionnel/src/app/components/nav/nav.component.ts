import { Component, OnInit } from '@angular/core';
import { Drawer } from 'flowbite';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  drawer: Drawer = {} as Drawer;

  constructor() {}

  ngOnInit(): void {
    this.drawer = new Drawer(document.getElementById('logo-sidebar'));
  }
}
