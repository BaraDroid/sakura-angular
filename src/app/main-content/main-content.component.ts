import { Component } from '@angular/core';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { FooterComponent } from '../shared/components/footer/footer.component';


@Component({
  selector: 'app-main-content',
  imports: [LandingPageComponent, OurMenuComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
