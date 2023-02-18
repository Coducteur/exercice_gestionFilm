import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/data/Movie-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularMovies?: Movie[] = [];
  nextOnTheater?: Movie[] = [];
  bestNotesFilms?: Movie[] = [];
  nowInTheater?: Movie[] = [];

  constructor(private useService: ApiService) {}

  ngOnInit() {
    this.getPopularMovies();
    this.getNextMoviesOnTheater();
    this.getBestNotedFilms();
    this.getNowPlayingOnTheater();
  }

  getPopularMovies() {
    return this.useService
      .getPopularMovies()
      .subscribe((response) => (this.popularMovies = response.results));
  }

  getNextMoviesOnTheater() {
    return this.useService
      .getNextMoviesOnTheater()
      .subscribe((response) => (this.nextOnTheater = response.results));
  }

  getBestNotedFilms() {
    return this.useService
      .getBestNotedFilms()
      .subscribe((response) => (this.bestNotesFilms = response.results));
  }

  getNowPlayingOnTheater() {
    return this.useService
      .getNowPlayingOnTheater()
      .subscribe((response) => (this.nowInTheater = response.results));
  }
}
