import { Injectable } from '@angular/core';

@Injectable()
export class KentekenService {
    constructor() {
        //console.log('KentekenFormatService created.');
    }

    getFormattedKenteken(value:String): String {
        var parts = false;
        var REGEX_LICENSEPLATE_FORMATTER = [
            /^([A-Z]{2})\-?([\d]{2})\-?([\d]{2})$/i,   // 1   XX-99-99
            /^([\d]{2})\-?([\d]{2})\-?([A-Z]{2})$/i,   // 2   99-99-XX
            /^([\d]{2})\-?([A-Z]{2})\-?([\d]{2})$/i,   // 3   99-XX-99
            /^([A-Z]{2})\-?([\d]{2})\-?([A-Z]{2})$/i,  // 4   XX-99-XX
            /^([A-Z]{2})\-?([A-Z]{2})\-?([\d]{2})$/i,  // 5   XX-XX-99
            /^([\d]{2})\-?([A-Z]{2})\-?([A-Z]{2})$/i,  // 6   99-XX-XX
            /^([\d]{2})\-?([A-Z]{3})\-?([\d]{1})$/i,   // 7   99-XXX-9
            /^([\d]{1})\-?([A-Z]{3})\-?([\d]{2})$/i,   // 8   9-XXX-99
            /^([A-Z]{2})\-?([\d]{3})\-?([A-Z]{1})$/i,  // 9   XX-999-X
            /^([A-Z]{1})\-?([\d]{3})\-?([A-Z]{2})$/i,  // 10  X-999-XX
            /^([A-Z]{3})\-?([\d]{2})\-?([A-Z]{1})$/i,  // 11  XXX-99-X
            /^([A-Z]{1})\-?([\d]{2})\-?([A-Z]{3})$/i,  // 12  X-99-XXX
            /^([\d]{1})\-?([A-Z]{2})\-?([\d]{3})$/i,   // 13  9-XX-999
            /^([\d]{3})\-?([A-Z]{2})\-?([\d]{1})$/i    // 14  999-XX-9
        ];

        REGEX_LICENSEPLATE_FORMATTER.forEach(function (regex) {
            if (regex.test(value)) {
                parts = value.match(regex);
            }
        });

        if (parts) {
            return `${parts[1]}-${parts[2]}-${parts[3]}`;
        }

        return value;
    }

    getKentekenUrl(kenteken:String): String {
        console.log('kenteken is: ' + kenteken);
        var url = 'https://www.centraalbeheer.nl/verzekeringen/autoverzekering/premie-berekenen/Paginas/autoverzekering.aspx#/basisgegevens?',
        url = url+ 'licensePlateInput=' + kenteken + '&stap=stap1' + '&pg_kenteken=' + kenteken;
        console.log(url);
        return url;
    }
}