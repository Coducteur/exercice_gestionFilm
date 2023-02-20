import { Component, OnChanges } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnChanges {
  value: string = 'Rechercher un film';

  searchInfo: string = '';

  constructor(public apiService: ApiService) {}

  ngOnChanges() {
    this.sendSearchToService();
  }

  eraseValue() {
    this.value = '';
  }

  sendSearchToService() {
    this.apiService.getSearchFromComponent(this.searchInfo);
  }
}
