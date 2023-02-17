import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKey } from './data/apiKey';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr&page=1&region=FR`
    );
  }

  getNextMoviesOnTheater(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=fr&page=1&region=FR`
    );
  }

  getBestNotedFilms(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=fr&page=1&region=FR`
    );
  }

  getNowPlayingOnTheater(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=fr&page=1&region=FR`
    );
  }
}
