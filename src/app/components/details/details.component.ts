import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {  
  
  movieId = '';

  stars = [];
  genres = [];
  directors = [];

  constructor(private _activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieId = p["id"];            
    })
  }
  
  ngOnInit(): void {
    this.loadMovieSummary();
  }
  loadMovieSummary() {
    this.moviesService.getMovieSummary()
      .subscribe((data: any) => {        
        this.stars = data.star;
        this.genres = data.genre;
        this.directors = data.director;
      })
  }
}
