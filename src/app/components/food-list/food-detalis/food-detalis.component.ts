import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodorderService } from '../../../foodorder.service';
import { Food } from 'src/app/interface/food';

@Component({
  selector: 'app-food-detalis',
  templateUrl: './food-detalis.component.html',
  styleUrls: ['./food-detalis.component.scss']
})
export class FoodDetalisComponent {
active_index:number=0
food:Food;
previous:number=0;
constructor(public activeRoute:ActivatedRoute,public FoodorderService:FoodorderService,public router:Router){
this.active_index=this.activeRoute.snapshot.params['id']
this.food=this.FoodorderService.getfoodbyid(this.active_index)[0];
}

addtocard(){
  this.FoodorderService.$CARDCOUNTER.subscribe(data=>this.previous=data)
  this.FoodorderService.$CARDCOUNTER.next(++this.previous)
  this.FoodorderService.addCard(this.food)
}
}
