import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  result: string = '';

  @Output()
  newItemEvent = new EventEmitter<string>();

  constructor() {}

  search(event: KeyboardEvent) {
    let val;

    if (event.key === 'Enter') {
      val = this.result;

      this.newItemEvent.emit(this.result);

      this.result = '';
    }
  }

  ngOnInit() {}
}
