import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
previous:number=0
totalCount:number=1;
totalprice:number=0;
constructor(public FoodorderService:FoodorderService,public fb:FormBuilder){
this.cartlist=this.FoodorderService.getcartsdata()
this.totalCount=this.cartlist.length
this.FoodorderService.$CARDCOUNTER.next(this.totalCount)
this.cartlist.forEach((cart:any)=>{
this.totalprice+=Number(cart.price)
})
  this.patch()
}
cartform=this.fb.group({
  countlist:this.fb.array([])
})
get cartcontrols(){
  return this.cartform.controls;
 }
 get countcontrols(): FormArray{
  return this.cartcontrols.countlist as FormArray;
 }
 patch(){
  const control = <FormArray>this.cartform.get('countlist');
  this.cartlist
  .forEach((element) => {
    control.push(this.fb.group({
     count:[1]
    })
    )
});

}
countChange(){
this.totalprice=0
this.totalCount=0
for (let index = 0; index < this.cartlist.length; index++) {
  this.totalprice+=(this.cartlist[index].price*this.countcontrols.controls[index].value.count)
  this.totalCount+=this.countcontrols.controls[index].value.count
}
this.FoodorderService.$CARDCOUNTER.next(this.totalCount)

}
removeItem(index:number,price:number){  
this.totalprice-=(this.cartlist[index].price*this.countcontrols.controls[index].value.count)
this.totalCount-=this.countcontrols.controls[index].value.count
this.FoodorderService.removefromcart(index)
this.FoodorderService.$CARDCOUNTER.next(this.totalCount)
this.cartlist=this.FoodorderService.getcartsdata()
}
}
