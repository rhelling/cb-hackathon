import { Component } from '@angular/core';
import { KentekenService } from '../kenteken-service/kenteken-service'

@Component({
    selector: 'cb-kenteken',
    templateUrl: 'app/kenteken-component/kenteken.component.html',
    styleUrls: ['app/kenteken-component/kenteken.component.css'],
    providers: [KentekenService]
})

export class KentekenComponent {

    kenteken = "";

    maskKenteken(event:any) {
        console.log(this);
        console.log(event);
        this.kentekenService.getFormattedKenteken(event.target.value)
    }
    kentekenOphalen(event:any) {
        console.log(this);
        console.log(event);
        this.kentekenService.getKentekenUrl(this.kenteken);
    }

    constructor(private kentekenService:KentekenService) {
        console.log("got service?");
        console.log(kentekenService);
    }

}
