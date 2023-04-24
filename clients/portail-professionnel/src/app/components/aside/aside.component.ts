import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login.service.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  constructor(private log: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.log.logout();
    this.router.navigateByUrl('/login');
  }
}
