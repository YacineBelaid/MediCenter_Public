import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drawer } from 'flowbite';
import { AuthService } from 'src/app/services/login.service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  drawer: Drawer = {} as Drawer;

  constructor(
    private log: AuthService, // Injection du service auth
    private router: Router
  ) {}

  ngOnInit(): void {
    this.drawer = new Drawer(document.getElementById('logo-sidebar'));
  }

  logout() {
    this.log.logout();
    this.router.navigateByUrl('/login');
  }
}
