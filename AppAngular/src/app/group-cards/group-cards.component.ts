import { Component, Input, Output } from '@angular/core';
import { faCoins ,faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-group-cards',
  templateUrl: './group-cards.component.html',
  styleUrls: ['./group-cards.component.scss']
})
export class GroupCardsComponent {
  @Input() faCoins:IconDefinition = faCoins
  @Input() faShoppingCart:IconDefinition= faShoppingCart
}
