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
        this.kenteken = this.kentekenService.getFormattedKenteken(this.kenteken)
    }
    kentekenOphalen(event:any) {
        window.location = this.kentekenService.getKentekenUrl(this.kenteken);
    }

    constructor(private kentekenService:KentekenService) {
        console.log("got service?");
        console.log(kentekenService);
    }

}
