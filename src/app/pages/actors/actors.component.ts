import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent {
  @Input() movieId: number = 506440;
  actors = [
    {
      name: '',
      character: '',
      profile_path: '',
    },
  ];

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    // id du film ajouté dans la méthode:
    this.getActorsByIdMovieFromService(this.movieId);
  }

  getActorsByIdMovieFromService(idMovie: number) {
    this.apiService
      .getActorsByIdMovie(idMovie)
      .subscribe((result) => (this.actors = result.cast));
  }
}
