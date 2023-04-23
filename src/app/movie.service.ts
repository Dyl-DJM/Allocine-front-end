import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieFullInformations } from './model/MovieFullInformations';
import { MovieShortInformations } from './model/MovieShortInformations';
import { SearchResponse } from './model/SearchResponse';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpclient: HttpClient) {}

  transform(chaine: string): string {
    let new_chaine = '';

    for (let letter of chaine) {
      if (letter === ' ') {
        letter = '%20';
      }
      new_chaine = new_chaine.concat(letter);
    }

    return new_chaine;
  }

  getMovies(item: string): Observable<SearchResponse> {
    let link = 'https://www.omdbapi.com/?apikey=1ecf301e&s='.concat(
      this.transform(item)
    );

    // Create simple observable that emits three values
    let myObservable = this.httpclient.get<SearchResponse>(link);

    return myObservable;
  }

  getMoreInfo(movie_id): Observable<MovieFullInformations> {
    let link = 'https://www.omdbapi.com/?apikey=1ecf301e&i='.concat(movie_id);

    // Create simple observable that emits three values
    let myObservable = this.httpclient.get<MovieFullInformations>(link);

    return myObservable;
  }

  newMovies() {
    return [];
  }
}
