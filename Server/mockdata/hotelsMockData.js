import fs from 'fs';
import path from 'path';

export class HotelMockData {
    constructor(){
        this.HOTELS = new Array();
    }
    
    static LoadMockHotels(){
        this.HOTELS = JSON.parse(fs.readFileSync(path.resolve('./mockdata/data.json'), 'utf8'));  
    }
}

