import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/login.service.service';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-portail',
  templateUrl: './portail.component.html',
  styleUrls: ['./portail.component.css']
})
export class PortailComponent implements OnInit {

  constructor( 
    private authService: AuthService, // Injection du service auth
  private router: Router ) {

   }

  ngOnInit(): void {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
  }

  
}
