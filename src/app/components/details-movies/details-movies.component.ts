import { Component } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent {
  similarMovies: any[] = [
    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #1 title',
      rate: 9.5
    },

    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #2 title',
      rate: 9.5
    },

    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #3 title',
      rate: 9.5
    },

    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #4 title',
      rate: 9.5
    },

    {
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie #5 title',
      rate: 9.5
    }
  ]
}
