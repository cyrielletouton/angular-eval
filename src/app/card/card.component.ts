import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MovieService } from '../movie.service';
import { Genre, Movie } from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  /**
   * movie passé depuis le composant parent
   */
  @Input() movie!: Movie;
  @Input() genre!: Genre;
  @Output() genreUpdatedEvent = new EventEmitter<Movie>();

  @Output() movieUpdatedEvent = new EventEmitter<Movie>();

  error = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }



  // updateByGenre() {
  //   this.movieService.getGenre(this.genre.name)
  //   .subscribe({
  //     next: () => {
  //       this.genreUpdatedEvent.emit(this.genre);
  //     },
  //     error: (error) => {
  //       this.error = error;
  //     }
  //   })
  // }

}
