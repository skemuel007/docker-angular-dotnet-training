import { Component } from '@angular/core';
import { IMovie } from './models/movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movies Microservice Demo using Tye Project';
  movies!: IMovie[];


  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe((movies: IMovie[])  => {
      this.movies = movies;
      console.log(this.movies);
      console.table(this.movies);
    }, error => console.log(error));
  }
}
