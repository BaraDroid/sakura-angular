
import { Component } from '@angular/core';  //aus der app.component.ts kopiert
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component"; //@ bezeichnet Pfad

@Component({        //decorater, funktionalität rum herum die Klasse
    selector: 'app-landingPage',
    standalone: true,
    imports: [NavbarComponent],    //wenn wir etwas importieren möchten, Kevin tut cCommonModule rein, den habe ich nicht
    template: `
        <section><div class="fontRaleway"><app-navbar></app-navbar></div>
            <h1 class="fontRaleway">SAKURA RAMEN</h1>
            <h4 class="fontRaleway">THE BEST RAMEN IN TOWN</h4>
        </section>`,   //wir können auch bloß url eingeben als templateUrls (wird angeboten)
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {} //hier kommt mein ts code (JS) rein