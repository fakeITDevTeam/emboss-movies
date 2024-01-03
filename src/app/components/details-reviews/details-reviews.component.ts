import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit {
  // movieRates: any[] = [
  //   {
  //     rate: 7.5,      
  //     review: 'This p tag is going to have the review description. Sometimes it can be very long and that is why we are using an accordion',
  //     author: 'Author',
  //     usefulCount: 100,
  //     totalCount: 120
  //   },  

  movieRates: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadMovieRates();
  }
  loadMovieRates() {
    this.httpClient.get<any[]>('assets/data/movieRates.json')
      .subscribe((data: any[]) => {
        console.log('Summary - ', data);

        this.movieRates = data;        
      })
  }
}
