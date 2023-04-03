import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodOrders';
  favIcon: HTMLLinkElement | any = document.querySelector("#appIcon");
  constructor(private titleService: Title){
    this.favIcon.href="/assets/logo.webp"
    this.titleService.setTitle("Food Order Application");
  }
  
}
