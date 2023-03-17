import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab3';
  selectBeer = ""
  OnBeerSelect(beer: string) {
    this.selectBeer=beer
   // console.log(beer)
  }
}
