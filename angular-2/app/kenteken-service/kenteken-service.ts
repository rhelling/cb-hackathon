import { Injectable } from '@angular/core';

@Injectable()
export class KentekenService {
    constructor() {
        //console.log('KentekenFormatService created.');
    }

    getFormattedKenteken(kenteken:String): String {
        return kenteken;
    }

    getKentekenUrl(kenteken:String): String {
        console.log('kenteken is: ' + kenteken);
        var url = 'https://www.centraalbeheer.nl/verzekeringen/autoverzekering/premie-berekenen/Paginas/autoverzekering.aspx#/basisgegevens?',
        url = url+ 'licensePlateInput=' + kenteken + '&stap=stap1' + '&pg_kenteken=' + kenteken;
        console.log(url);
        return url;
    }
}