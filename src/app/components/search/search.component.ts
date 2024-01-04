import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movieTitle = "";
  searchResult: any[] = [];

  // @Input() movieTitle!: string;

  constructor(private _activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
    })    

  }

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies() {
    this.moviesService.getSearchedMovies()
    .subscribe((data:any[]) => {
      this.searchResult = data;
    });
  }
  
  
}
