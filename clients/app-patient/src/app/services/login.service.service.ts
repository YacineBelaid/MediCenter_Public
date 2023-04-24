import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap,map } from 'rxjs/operators';
import { User } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Auth_API = 'http://localhost:3100'; 
  public currentUser : any;
  constructor(private http: HttpClient) { }

  login(identifiant: number, password: string): Observable<{ cookie: string; findUser: User }> {
    const loginData = { identifiant, password };
    return this.http.post<{ cookie: string; findUser: User }>(this.Auth_API +"/" + "login", loginData)
      .pipe(
        tap(response => {
          const { cookie, findUser } = response;
         // console.log(response)
         console.log("cookie:", cookie, "\nuser:", findUser);
         localStorage.setItem('response',JSON.stringify(response));
          // Stockez le cookie d'authentification dans le stockage local ou de local
          localStorage.setItem('auth_cookie',cookie);
          // Stockez les détails de l'utilisateur dans le stockage local ou de local
          localStorage.setItem('user', JSON.stringify(findUser));  

        }),
      );
  }

  logout(): Observable<any> {
    // Supprimez le cookie et les détails de l'utilisateur du stockage local ou de local
    localStorage.removeItem('auth_cookie');
    localStorage.removeItem('user');
    localStorage.clear;
    return this.http.post(this.Auth_API + "/"+ "logout", {});
  }
  // Vérifie si l'utilisateur est connecté ou non
  isLoggedIn(): boolean {
    return localStorage.getItem('auth_cookie') != undefined;
  }
  //fonction d'inscription
  signup(userData: Partial<User>): Observable<{ cookie: string; findUser: User }> {
    return this.http.post<{ cookie: string; findUser: User }>(this.Auth_API + '/signup', userData)
      .pipe(
        tap(response => {
          const { cookie, findUser } = response;
          localStorage.setItem('auth_cookie', cookie);
          localStorage.setItem('user', JSON.stringify(findUser));
        })
      );
  }
  
}