import { Component } from '@angular/core';
import { FoodorderService } from 'src/app/foodorder.service';
import { Food } from 'src/app/interface/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
cartlist:Food[]=[]
count:number=1
constructor(public FoodorderService:FoodorderService){
this.cartlist=this.FoodorderService.getcartsdata()
}
removeItem(index:number){

}
}
