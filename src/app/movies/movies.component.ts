import { Component, Input, OnInit } from '@angular/core';

import { Genre, Movie } from '../types';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
// @Output() postDeletedEvent = new EventEmitter<Post>();
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() genre!: Genre["name"];

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.movieService.getAllMovies()
    .subscribe(movies => {
      this.movies = movies;
    });
  }

  getByGenre(){
    // this.movies = this.movies.map(
    //   movie => movie.genres === updatedMovie.genres
    //     ? updatedMovie
    //     : movie
    // );
      const genreSidebar = String(this.route.snapshot.paramMap.get('genre'));
      // this.movies.forEach(movie => {
      //   movie.genres.forEach(genre => {
      //     if (genre.name == genreSidebar) {
      //       this.movies= []
      //       this.movies.push(movie)
      //     }
      //   }
      //   )})
      this.movieService.getGenre(genreSidebar)
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  // getByGenre(updatedMovie: Movie) {
  //   const genre = String(this.route.snapshot.paramMap.get('genre'));
  //   this.movieService.getGenre(genre).subscribe({
  //     next: (genre: Genre) => {
  //       this.genre = genre["name"];
  //     },
  //     error: (error: string) => {
  //       console.error(error);
  //     }
  //   });
  // }

}
