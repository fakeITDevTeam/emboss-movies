import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { catchError, of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //^) can use this HTTPClient using dependency injection
  //private httpClientOther = inject(HttpClient);
  
  // constructor(private httpClient: HttpClient) { //^) or passed it using constructor       
  // }

  constructor(private moviesService: MoviesService) { //^) or passed it using constructor       
  }
  
  isActive = true;
  fanFavoriteMovies: any[] = [];
  topMovies: any[] = [];
  
  ngOnInit(): void {
    this.getFanFavoriteMovies();
    this.getTopMovies();
  }

  // getFanFavoriteMovies() {
  //   this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json')
  //   .subscribe({
  //     next: (data:any[]) => {
  //       this.fanFavoriteMovies = data;
  //     },
  //     error: (error) => {
  //       console.log("[getFanFavoriteMovies] Error loading fan favorites data: ", error);
  //     },
  //     complete: () => {
  //       console.log("[getFanFavoriteMovies] Request completed successfully");
  //     }
  //   });
  // }

  getFanFavoriteMovies() {
    this.moviesService.getFanFavoriteMovies()
    .pipe( 
      catchError((error) => {
        console.log("[getFanFavoriteMovies] Error loading fan favorites data: ", error);
        return of (null);
      })
    ).subscribe((data) => {
      if (data) {
        this.fanFavoriteMovies = data;
      } else {
        this.fanFavoriteMovies = [];
      }
    });        
  }

  getTopMovies() {
    this.moviesService.getTopMovies()
    .subscribe({
      next: (data:any[]) => {
        this.topMovies = data;
      },
      error: (error) => {
        console.log("[getTopMovies] Error loading top movies: ", error);
      },
      complete: () => {
        console.log("[getTopMovies] Request completed successfully");
      }
    });
  }
}
