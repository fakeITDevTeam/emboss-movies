import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {  
  movieId = '';

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieId = p["id"];

      console.log('Movie Id = ' + this.movieId);
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() called.');
  }
  ngOnInit(): void {
    console.log('ngOnInit() called.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called.');
  }  
}
