import { Component } from '@angular/core';
import { FoodorderService } from 'src/app/foodorder.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cardcounter:number=0
 constructor(public FoodorderService:FoodorderService){
  this.FoodorderService.$CARDCOUNTER.subscribe(data=>this.cardcounter=data)
}
searchChanged(e:any){
  this.FoodorderService.$SearchTerm.next(e.target.value)
}
}
