import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetalisComponent } from './components/food-list/food-detalis/food-detalis.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path:'',component:FoodListComponent},
  {path:'foodDetails/:id',component:FoodDetalisComponent},
  {path:'addcart',component:CartComponent},
  {path:'orders',component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
