import { Component } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent {
  movieRates: any[] = [
    {
      rate: 7.5,      
      review: 'This p tag is going to have the review description. Sometimes it can be very long and that is why we are using an accordion',
      author: 'Author',
      usefulCount: 100,
      totalCount: 120
    },

    {
      rate: 9.5,      
      review: 'This p tag is going to have the review description. Sometimes it can be very long and that is why we are using an accordion',
      author: 'Author',
      usefulCount: 100,
      totalCount: 120
    },

    {
      rate: 8.5,      
      review: 'This p tag is going to have the review description. Sometimes it can be very long and that is why we are using an accordion',
      author: 'Author',
      usefulCount: 100,
      totalCount: 120
    }
  ]
}
