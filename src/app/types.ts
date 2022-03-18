export class Movie {
    id!: number;
    title!: string;
    tagline!: string;
    poster_path!: string;
    vote_average!: number;
    runtime!: number;
    release_date!: Date;
    spoken_languages!: Language[] ;
    genres!: Genre[];
    comments!: Comment[];
  }

export class Language{
  name!: string;
}

export class Genre {
  id!: number;
  name!: string;
}

export class Comment{
  id!: number;
  movie_id!: number;
  text!: string;
  rating!: number;
  date!: string;
}