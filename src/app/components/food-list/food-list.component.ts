import { Component } from '@angular/core';
import { FoodorderService } from '../../foodorder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {
  foodList:any=[]
  filtername:string=''
constructor(public FoodorderService:FoodorderService,public router:Router){
  this.foodList=this.FoodorderService.foodList
  this.FoodorderService.$SearchTerm.subscribe(data=>this.filtername=data)
}

detail(index:number){
  this.router.navigate([`./foodDetails/${index}`])  
}
}
