import { Injectable } from '@angular/core';
import { Food } from './interface/food';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FoodorderService {
  foodList:Food[]=[{
    id:0,
    img:'../../assets/pasta.jpeg',
    head:'pasta',
    rate:4,
    country:'egypt',
    clock:'10-20',
    price:'10.00 EGP'
  },
  {
    id:1,
    img:'../../assets/dessert1.jpeg',
    head:'dessert',
    rate:5,
    country:'egypt',
    clock:'5-10',
    price:'7.00 EGP'
  },
  {
    id:2,
    img:'../../assets/breakfist2.webp',
    head:'breakfist',
    rate:3,
    country:'egypt',
    clock:'3-7',
    price:'10.00 EGP'
  },
  {
    id:3,
    img:'../../assets/fish.webp',
    head:'fish',
    rate:2,
    country:'egypt',
    clock:'20-30',
    price:'50.00 EGP'
  },{
    id:4,
    img:'../../assets/pasta3.webp',
    head:'pasta',
    rate:5,
    country:'egypt',
    clock:'10-20',
    price:'20.00 EGP'
  },{
    id:5,
    img:'../../assets/chekien.jpeg',
    head:'chekien',
    rate:4,
    country:'egypt',
    clock:'25-30',
    price:'70.00 EGP'
  },{
    id:6,
    img:'../../assets/dessert.jpeg',
    head:'dessert',
    rate:3,
    country:'egypt',
    clock:'10-20',
    price:'30.00 EGP'
  },{
    id:7,
    img:'../../assets/breakfist4.webp',
    head:'breakfist',
    rate:2,
    country:'egypt',
    clock:'5-10',
    price:'13.00 EGP',
  },
    {
      id:8,
      img:'../../assets/dessert3.jpeg',
      head:'dessert',
      rate:3,
      country:'egypt',
      clock:'5-10',
      price:'5.00 EGP'
    },
    {
      id:9,
      img:'../../assets/fish2.jpeg',
      head:'fish',
      rate:5,
      country:'egypt',
      clock:'5-20',
      price:'30.00 EGP'
    },{
      id:10,
      img:'../../assets/chekien2.jpeg',
      head:'checkien',
      rate:4,
      country:'egypt',
      clock:'7-10',
      price:'20.00 EGP'
    },{
      id:11,
      img:'../../assets/breakfist3.jpeg',
      head:'breakfist',
      rate:5,
      country:'egypt',
      clock:'1-10',
      price:'10.00 EGP'
    }
  ]
  cartlist:Food[]=[]
  $CARDCOUNTER=new BehaviorSubject<number>(0)
  constructor() { }

  getfoodbyid(index:number){
  return this.foodList.filter((food:Food)=>{ return this.foodList.indexOf(food)==index ? food :''})
  }
  getcartsdata(){
    return this.cartlist
  }
  addCard(card:Food){
    this.cartlist.push(card)
  }
}
