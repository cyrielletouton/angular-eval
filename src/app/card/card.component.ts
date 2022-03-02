import { Component, OnInit, Input } from '@angular/core';

import { MovieService } from '../movie.service';
import { Movie } from '../types';

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

  error = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
