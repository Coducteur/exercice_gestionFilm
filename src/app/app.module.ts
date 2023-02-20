import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoComponent } from './components/logo/logo.component';
import { FavorisComponent } from './pages/favoris/favoris.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    FavorisComponent,
    ActorsComponent,
    MoviesComponent,
    ListMoviesComponent,
    SearchComponent,
    MoviePageComponent,
    SearchResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
