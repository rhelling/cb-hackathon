import { Component } from '@angular/core';
import { KentekenFormatService } from '../kenteken-format-service/kenteken-format-service'

@Component({
    selector: 'cb-kenteken',
    templateUrl: 'app/kenteken-component/kenteken.component.html',
    styleUrls: ['app/kenteken-component/kenteken.component.css'],
    providers: [KentekenFormatService]
})

export class KentekenComponent {

    maskKenteken(event:any) {
        console.log(this);
        console.log(event);
        this.kentekenFormatService.getFormattedKenteken(event.target.value)
    }
    kentekenOphalen(event:any) {
        console.log(this);
        console.log(event);
    }

    constructor(private kentekenFormatService:KentekenFormatService) {
        console.log("got service?");
        console.log(kentekenFormatService);
    }

}
