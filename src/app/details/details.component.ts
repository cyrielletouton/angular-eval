import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../movie.service';
import { Movie } from '../types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  /**
   * post passé depuis le composant parent
   */
  @Input() movie!: Movie;

  error = '';

  formComment! : FormGroup;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formComment = this.formBuilder.group({ text: '', rating: '' });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe({
      next: (movie: Movie) => {
        this.movie = movie;
      },
      error: (error: string) => {
        console.error(error);
      }
    });
  }

  addComment() {
    this.movieService.addCommentMovie(this.movie.id, this.formComment.value)
      .subscribe({
        next: (newComment: Comment) => {
          this.movieService.getMovie(this.movie.id).subscribe({
            next: (movie: Movie) => {
              this.movie = movie;
            }
          })
        },
        error: (error) => {
          this.error = error;
        }
      })
  }

}
