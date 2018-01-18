import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getPopularMovies() {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.getApiKey() + "&language=pt-BR");
  }

  getMovieDetails(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=` + this.getApiKey() + "&language=pt-BR");
  }

  getApiKey(): string {
    return "ba6e490899633c8fc7c5df4ed64f6888";
  }

}
