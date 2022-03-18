import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Movie } from './types';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // URL absolue
  serverUrl = 'https://movie-api.benoithubert.me';
  // chemin relatif sur le serveur
  moviesPath = '/movies';

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

  getAllMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this.serverUrl}${this.moviesPath}`
      );
  }

  getMovie(movieId: number): Observable<Movie> {
    return this.http
      .get<Movie>(
        `${this.serverUrl}${this.moviesPath}/${movieId}`
      )
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  addCommentMovie(movieId: number, data: Partial<Comment>): Observable<Comment> {
    return this.http
      .post<Comment>(
        `${this.serverUrl}${this.moviesPath}/${movieId}/comments`,
        data
      )
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  getGenre(genreName: string): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this.serverUrl}${this.moviesPath}?genre=${genreName}`
      )
      .pipe(
        catchError(error => this.handleError(error))
      );
  }
}
