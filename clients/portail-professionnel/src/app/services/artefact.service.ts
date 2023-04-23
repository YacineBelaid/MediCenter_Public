import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Antecedants, Visites } from '../interfaces/Artefact.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtefactService {
  private Read_API = 'http://localhost:3200';
  private Write_API = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getVisite(id: number): Observable<{ ListeVisites: Visites[] }> {
    return this.http
      .post<{ ListeVisites: any }>(this.Read_API + '/' + 'getVisite', id)
      .pipe(
        tap((response) => {
          const ListeVisites = response;
          // Stockez les Visites dans le stockage local ou de session
          localStorage.setItem('Visites', JSON.stringify(ListeVisites));
        })
      );
  }
  createVisite(id: number): Observable<{ Visites: Visites }> {
    return this.http
      .post<{ Visites: Visites }>(this.Write_API + '/' + 'create', id)
      .pipe(
        tap((response) => {
          const Visites = response;
          // Stockez les Visites dans le stockage local ou de session
          localStorage.setItem('Visites', JSON.stringify(Visites));
        })
      );
  }
  createAntecedants(
    id: number
  ): Observable<{ ListeAntecedants: Antecedants[] }> {
    return this.http
      .post<{ ListeAntecedants: any }>(this.Write_API + '/' + 'create', id)
      .pipe(
        tap((response) => {
          const ListeAntecedants = response;
          // Stockez les Antecedants dans le stockage local ou de session
          localStorage.setItem('Antecedants', JSON.stringify(ListeAntecedants));
        })
      );
  }
  getAntecedants(id: number): Observable<{ Antecedants: Antecedants }> {
    return this.http
      .post<{ Antecedants: Antecedants }>(
        this.Read_API + '/' + 'getAntecedants',
        id
      )
      .pipe(
        tap((response) => {
          const Antecedants = response;
          // Stockez les Antecedants dans le stockage local ou de session
          localStorage.setItem('Antecedants', JSON.stringify(Antecedants));
        })
      );
  }
}
