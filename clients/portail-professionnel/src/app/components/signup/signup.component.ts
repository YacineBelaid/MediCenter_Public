import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthService } from '../../services/login.service.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup; // initialisation du formulaire

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, // Injection du service auth
    private router: Router // Injection du routeur
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const identifiant = this.signupForm.get("username")?.value;
    const password = this.signupForm.get("password")?.value;
    const birthdate = this.signupForm.get("birthdate")?.value;
    const lastName = this.signupForm.get("lastName")?.value;
    const firstName = this.signupForm.get("firstName")?.value;
    const professionnelSante = this.signupForm.get("professionnelSante")?.value;
    const confirmPassword = this.signupForm.get("confirmPassword")?.value;
    const id = Math.floor(Math.random()*1000)
    const userData = {id,lastName,firstName,identifiant,birthdate,password,professionnelSante}
    
    if (identifiant && password && confirmPassword) {
      if (password !== confirmPassword) {
        // gestion des mots de passe
        console.log("Passwords do not match");
        return;
      }
      this.authService.signup(userData).subscribe(
        () => {
          // Redirections vers le portail
          this.router.navigate(['/login']);
        },
        (error: any) => {
          // Handle sign up errors here
          console.log(error);
        }
      );
    }
  }
}
