import { Component } from '@angular/core';
import { BrothComponent } from './broth/broth.component';
import { NoodleComponent } from './noodle/noodle.component';
import { ToppingComponent } from './topping/topping.component';

@Component({
  selector: 'app-how-to-order',
  imports: [BrothComponent, NoodleComponent, ToppingComponent],
  templateUrl: './how-to-order.component.html',
  styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {

}
