import { Component, Input, OnInit } from '@angular/core';
import { MovieFullInformations } from '../model/MovieFullInformations';
import { MovieShortInformations } from '../model/MovieShortInformations';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input()
  monInput: MovieShortInformations[];

  public movie_list: MovieShortInformations[];

  constructor() {}

  ngOnInit() {
    this.movie_list = this.monInput;
    console.log('Here we are');
  }
}
