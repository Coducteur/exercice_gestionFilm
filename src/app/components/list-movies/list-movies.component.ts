import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/data/PopularMovie.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent {
  @Input() arrayChoosenToBeDisplayed?: Movie[] = [];

  getInfos(event: any) {
    console.log(event);
    console.log(this.arrayChoosenToBeDisplayed);
  }
}
