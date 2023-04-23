import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieFullInformations } from '../model/MovieFullInformations';
import { MovieShortInformations } from '../model/MovieShortInformations';
import { SearchResponse } from '../model/SearchResponse';
import { HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  movieService: MovieService;

  movies_found: MovieShortInformations[] = [];

  constructor(private httpclient: HttpClient, movieService: MovieService) {
    this.movieService = movieService;
  }

  notifyUser(item: string): void {
    if (this.movies_found != [])
      this.movies_found.splice(0, this.movies_found.length);

    this.movieService.getMovies(item).subscribe((data) => {
      if (data.Search !== undefined) {
        for (let movie of data.Search) {
          this.movies_found.push(movie);
        }
      }

      console.log(this.movies_found);
    });
  }

  ngOnInit() {}
}
