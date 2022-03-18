import { Component, OnInit } from '@angular/core';

import { Movie } from '../types';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.movieService.getAllMovies()
    .subscribe(movies => {
      this.movies = movies;
    });
  }

  updateMovies(genre: string) {
    this.movieService.getGenre(genre).subscribe(
      movies => this.movies = movies
    );
  }

}
