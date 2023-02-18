export class Movie {
  constructor(
    public id: number,
    public poster_path: string,
    public genre_ids: { 0?: number; 1?: number; 2?: number },
    public title: string,
    public overview: string,
    public vote_average: number
  ) {}
}
