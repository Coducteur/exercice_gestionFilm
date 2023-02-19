import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  movieId: number = 0;

  movieToDisplay = {
    belongs_to_collection: {},
    genres: [{ id: 0, name: '' }],
    budget: 0,
    id: 0,
    overview: '',
    popularity: 0,
    poster_path: '',
    title: '',
    original_title: '',
    video: false,
    vote_average: 0,
  };

  constructor(private route: ActivatedRoute, public apiService: ApiService) {}

  ngOnInit() {
    //récuperer l'id du film.
    this.route.params.subscribe(
      (params) => (this.movieId = parseInt(params['id']))
    );
    // id du film ajouté dans la méthode:
    this.getDetailsByIdMovieFromService(this.movieId);
  }

  getDetailsByIdMovieFromService(idMovie: number) {
    this.apiService
      .getDetailsByIdMovie(idMovie)
      .subscribe((result) => (this.movieToDisplay = result));
  }
}
