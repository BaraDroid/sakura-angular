import { Component } from '@angular/core';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowToOrderComponent } from "./how-to-order/how-to-order.component";
import { MapAndAdressComponent } from './map-and-adress/map-and-adress.component';
import { LandingPageComponent } from './landingPage/landingPage.component';


@Component({
  selector: 'app-main-content',
  imports: [LandingPageComponent, HowToOrderComponent, OurMenuComponent, MapAndAdressComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
