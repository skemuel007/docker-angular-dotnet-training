import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.baseUrl + 'movies');
  }
}
