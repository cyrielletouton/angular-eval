import { Component, Input, OnInit } from '@angular/core';

import { Genre } from '../types';
import { GenreService } from '../genre.service';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  genres: Genre[] = [];

  constructor(
    private genreService: GenreService
    ) { }

  ngOnInit(): void {
    this.genreService.getAllGenres()
    .subscribe(genres => {
      this.genres = genres;
    });
  }

}
