import { Component } from '@angular/core';
import { TankatsuComponent } from './tankatsu/tankatsu.component';
import { SpicyMisoComponent } from './spicy-miso/spicy-miso.component';
import { ShioComponent } from './shio/shio.component';

@Component({
  selector: 'app-our-menu',
  imports: [TankatsuComponent, SpicyMisoComponent, ShioComponent],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

}
