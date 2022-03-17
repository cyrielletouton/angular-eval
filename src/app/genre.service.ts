import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Genre } from './types';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  // URL absolue
  serverUrl = 'https://movie-api.benoithubert.me';
  // chemin relatif sur le serveur
  genresPath = '/genres';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  private handleError(error: HttpErrorResponse | string) {
    if (typeof error === 'string') {
      return throwError(error);
    }
    let errorMessage = '';
    switch (error.status) {
      case 0:
        errorMessage = 'A network error occurred. Please come back later';
        break;
      case 400:
        errorMessage = 'There are missing or misformated fields.';
        break;
      case 404:
        errorMessage = 'This post does not exist anymore.';
        break;
      default:
        errorMessage = 'An unexpected error occurred.';
    }
    return throwError(errorMessage);
  }

  getAllGenres(): Observable<Genre[]> {
    return this.http
      .get<Genre[]>(
        `${this.serverUrl}${this.genresPath}`
      );
  }
}
