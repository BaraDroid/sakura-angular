
import { Component } from '@angular/core';  //aus der app.component.ts kopiert
import { RouterOutlet } from '@angular/router'; //@ bezeichnet Pfad

@Component({        //decorater, funktionalität rum herum die Klasse
    selector: 'app-landingPage',
    standalone: true,
    imports: [],    //wenn wir etwas importieren möchten, Kevin tut cCommonModule rein, den habe ich nicht
    template: `<section>
        <h1 class="fontRaleway">SAKURA RAMEN</h1>
        <h4 class="fontRaleway">THE BEST RAMEN IN TOWN</h4>
        </section>`,   //wir können auch bloß url eingeben als templateUrls (wird angeboten)
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {} //hier kommt mein ts code (JS) rein