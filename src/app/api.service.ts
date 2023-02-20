import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKey } from './data/apiKey';
import { Movie } from './data/PopularMovie.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  search: string = '';

  constructor(public http: HttpClient) {}

  // API TMDB https://developers.themoviedb.org/3/getting-started/introduction
  // tableau des films populaires
  getPopularMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr&page=1&region=FR`
    );
  }
  // tableau des films à venir
  getNextMoviesOnTheater(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=fr&page=1&region=FR`
    );
  }
  // tableau des films les mieux notés
  getBestNotedFilms(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=fr&page=1&region=FR`
    );
  }
  // tableau des films au cinéma actuellement
  getNowPlayingOnTheater(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=fr&page=1&region=FR`
    );
  }

  // détail d'un film:
  getDetailsByIdMovie(movieId: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=fr`
    );
  }

  // detail des acteurs du film:
  getActorsByIdMovie(movieId: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=fr`
    );
  }

  // recherche:
  returnResultOfSearch(searchRequest: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=fr&query=${searchRequest}&page=1&include_adult=false`
    );
  }

  getSearchFromComponent(request: string) {
    this.search = request;
  }
  sendSearch() {
    return this.search;
  }
}
