import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/login.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService] // Ajoutez le service d'authentification en tant que fournisseur de service
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.maxLength(35),
      ],
    ],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
        if (this.authService.isLoggedIn()) {
      this.router.navigate(['/portail']);
    }

   }
  onSubmit() {
    let id = this.loginForm.get("username")?.value;
    const password = this.loginForm.get('password')?.value;
    if(id && password){
      const identifiant = parseInt(id)
    this.authService.login(identifiant, password).subscribe(
      (response) => {
        
        // Redirigez l'utilisateur vers une page de succès ou une page d'accueil
        this.router.navigate(['/portail']);
      },
      (error) => {
        // Gérez les erreurs de connexion ici
        console.log(error);
      }
    );
    }
  }
}

