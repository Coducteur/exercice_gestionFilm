import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/data/PopularMovie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  nextOnTheaterMovies: Movie[] = [];
  bestNotesMovies: Movie[] = [];
  nowInTheaterMovies: Movie[] = [];

  constructor(private useService: ApiService) {}

  ngOnInit() {
    this.getPopularMoviesFromService();
    this.getNextMoviesOnTheaterFromService();
    this.getBestNotedFilmsFromService();
    this.getNowPlayingOnTheaterFromService();
  }

  getPopularMoviesFromService() {
    return this.useService
      .getPopularMovies()
      .subscribe((response) => (this.popularMovies = response.results));
  }

  getNextMoviesOnTheaterFromService() {
    return this.useService
      .getNextMoviesOnTheater()
      .subscribe((response) => (this.nextOnTheaterMovies = response.results));
  }

  getBestNotedFilmsFromService() {
    return this.useService
      .getBestNotedFilms()
      .subscribe((response) => (this.bestNotesMovies = response.results));
  }

  getNowPlayingOnTheaterFromService() {
    return this.useService
      .getNowPlayingOnTheater()
      .subscribe((response) => (this.nowInTheaterMovies = response.results));
  }
}
