import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emboss-movies';

  today = new Date;
  
  imageUrl = 'https://dotnethow.net/images/movies/movie-1.jpeg';
  imageWidth = 150;
  imageHeight = 200;

  price = 10;

  sellingPrice = 5000000000*12;

  attributeValue = "movies-app-test-value";

  isSampleApplied = true;

  multipleClasses = 'sample-bgcolor sample-color';

  multipleStyles = 'background-color: blueviolet; color: white'; //style

  bgcolor = 'blueviolet';

  forecolor = "white";

  timeNow = new Date();

  setTimeToNow() {
    console.log(new Date());
    this.timeNow = new Date();
  }

  textColor = '';
  setTextColor(_color: string) {
    console.log(_color);
    this.textColor = _color;
  }
}
