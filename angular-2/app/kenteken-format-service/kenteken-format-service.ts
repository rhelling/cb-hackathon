import { Injectable } from '@angular/core';

@Injectable()
export class KentekenFormatService {
    constructor() {
        //console.log('KentekenFormatService created.');
    }

    getFormattedKenteken(kenteken:String): String {
        return kenteken;
    }
}