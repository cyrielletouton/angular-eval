import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Genre, Movie } from '../types';
import { GenreService } from '../genre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  genres: Genre[] = [];

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute
    ) {}

  /**
   * event emitter pour transmettre le genre màj au composant parent
   */
   @Output() genreUpdatedEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.genreService.getAllGenres()
    .subscribe(genres => {
      this.genres = genres;
    });
  }

  updateGenre(genre: string){
    this.genreUpdatedEvent.emit(genre);
  }
}
