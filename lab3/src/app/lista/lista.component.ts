import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  protected list: any
  @Output() selectBeer = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  OnBeerSelect(beer: string) {
    this.selectBeer.emit(beer)
  }
  ngOnInit(): void {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=20"
    this.httpClient.get(url).subscribe(data => {
     
      this.list = data
    })
  }
}
