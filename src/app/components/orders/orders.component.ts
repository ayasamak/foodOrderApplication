import { Component } from '@angular/core';
import { FoodorderService } from 'src/app/foodorder.service';
import { Food } from 'src/app/interface/food';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders:Food[]=[]
  constructor(public FoodorderService:FoodorderService){
    this.orders=this.FoodorderService.getcartsdata()

  }
}
