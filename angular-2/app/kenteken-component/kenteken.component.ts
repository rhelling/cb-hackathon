import { Component } from '@angular/core';

@Component({
    selector: 'cb-kenteken',
    templateUrl: 'app/kenteken-component/kenteken.component.html',
    styleUrls: ['app/kenteken-component/kenteken.component.css']
})
export class KentekenComponent {
    maskKenteken(event:any) {
        console.log(this);
        console.log(event);
    }
    kentekenOphalen(event:any) {
        console.log(this);
        console.log(event);
    }
}
