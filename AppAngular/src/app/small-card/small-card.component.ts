import { Component, Input } from '@angular/core';
import { faCoins,faEllipsisH } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {
@Input() price = "3"
@Input() title = "Title"
@Input() icon = faCoins
option = faEllipsisH
@Input() color = "";


}
