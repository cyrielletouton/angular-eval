import { Component, OnInit } from '@angular/core';

import { Movie } from '../types';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies()
    .subscribe(movies => {
      this.movies = movies;
    });
  }

}
