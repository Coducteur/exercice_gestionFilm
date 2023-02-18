import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  value: string = 'Rechercher un film';

  eraseValue() {
    this.value = '';
  }
}
