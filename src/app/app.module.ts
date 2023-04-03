import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { FoodDetalisComponent } from './components/food-list/food-detalis/food-detalis.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodListComponent,
    FoodDetalisComponent,
    CartComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
