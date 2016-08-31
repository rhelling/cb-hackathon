import { Injectable } from '@angular/core';

@Injectable()
export class KentekenService {
    constructor() {
        //console.log('KentekenFormatService created.');
    }

    getFormattedKenteken(kenteken:String): String {
        return kenteken;
    }
}