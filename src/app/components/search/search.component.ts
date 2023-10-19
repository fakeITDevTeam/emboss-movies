import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movieTitle = "";

  // @Input() movieTitle!: string;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
    })    

  }
  
  
}
