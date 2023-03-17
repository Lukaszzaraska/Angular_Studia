import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

@Input() beer!:any;
OnBeerSelect(beer: string) {
  //this.selectBeer=beer
  console.log(beer)
}
}
