import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from "./main-content/main-content.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { LandingPageComponent } from './main-content/landingPage/landingPage.component';
import { ImprintComponent } from './imprint/imprint.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComponent, MainContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura-angular';
}
