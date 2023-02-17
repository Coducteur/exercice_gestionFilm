import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { popularMovie } from 'src/app/data/PopularMovie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularMovies: any = [];
  nextOnTheater: [] = [];
  bestNotesFilms: [] = [];
  nowInTheater: [] = [];

  constructor(private useService: ApiService) {}

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    return this.useService
      .getPopularMovies()
      .subscribe((response) => (this.popularMovies = response.results));
  }
}
