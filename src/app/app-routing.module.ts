import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { FavorisComponent } from './pages/favoris/favoris.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:id',
    component: MoviePageComponent,
  },
  {
    path: 'result',
    component: SearchResultComponent,
  },
  {
    path: 'favorite',
    component: FavorisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
