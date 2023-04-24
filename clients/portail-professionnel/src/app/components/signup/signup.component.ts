import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/login.service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup; // initialisation du formulaire

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, // Injection du service auth
    private router: Router // Injection du routeur
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: [, Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const id = this.signupForm.get('username')?.value;
    const password = this.signupForm.get('password')?.value;
    const Date_naissance = this.signupForm.get('birthdate')?.value;
    const lastname = this.signupForm.get('lastName')?.value;
    const Firstname = this.signupForm.get('firstName')?.value;
    const pro_sante = this.signupForm.get('professionnelSante')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;

    if (
      id &&
      password &&
      confirmPassword &&
      Firstname &&
      lastname &&
      Date_naissance
    ) {
      const identifiant = parseInt(id);
      const userData = {
        lastname,
        Firstname,
        identifiant,
        Date_naissance,
        password,
        pro_sante,
      };
      if (password !== confirmPassword) {
        // gestion des mots de passe
        console.log('Passwords do not match');
        return;
      }
      this.authService.signup(userData).subscribe(
        () => {
          // Redirections vers le portail
          this.router.navigateByUrl('/login');
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}
