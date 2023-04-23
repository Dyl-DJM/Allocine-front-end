import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MovieFullInformations } from '../model/MovieFullInformations';
import { SearchResponse } from '../model/SearchResponse';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  movie: String;
  full: boolean = false;
  more_about: MovieFullInformations;
  movies_found: SearchResponse;

  movieService;

  @Input()
  monInput: string;

  constructor(private httpclient: HttpClient, movieService: MovieService) {
    this.movieService = movieService;
  }

  ngOnInit() {
    this.movie = this.monInput;
  }

  fullMode(movie_id) {
    this.full = !this.full;

    this.movieService.getMoreInfo(movie_id).subscribe((data) => {
      this.more_about = data;
    });
  }
}
