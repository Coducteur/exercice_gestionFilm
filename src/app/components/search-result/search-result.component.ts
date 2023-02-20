import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  searchInfo: string = '';

  resultRequest = [
    {
      backdrop_path: '',
      id: 0,
      title: '',
      original_title: '',
      overview: '',
      poster_path: '',
      media_type: '',
      release_date: '',
      name: '',
      profile_path: '',
      known_for: [
        {
          title: '',
          overview: '',
          poster_path: '',
        },
      ],
    },
  ];
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    // id du film ajouté dans la méthode:
    this.getResultOfSearchFromService(this.searchInfo);
    this.returnResultOfSearchFromService();
  }

  getResultOfSearchFromService(request: string) {
    this.apiService
      .returnResultOfSearch(request)
      .subscribe((result) => (this.resultRequest = result.results));
  }

  returnResultOfSearchFromService() {
    this.searchInfo = this.apiService.sendSearch();
  }
}
