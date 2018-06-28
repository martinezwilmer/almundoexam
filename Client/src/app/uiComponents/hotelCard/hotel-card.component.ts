import { Component, Input } from '@angular/core';
import { HotelRateComponent } from '../hotelRate/hotel-rate.component';
import { HotelAmenitiesComponent } from '../hotelAmenities/hotel-amenities.component';

@Component({
    selector: 'hotel-card',
    templateUrl: './hotel-card.component.html',
    styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent{
    @Input() photo: string;
    @Input() title: string;
    @Input() stars: Number = 5;
    @Input() price: Number = 863;
    @Input() amenities: string[] = ["nightclub","beach", "restaurant"];

    photoPath = '/assets/images/hotels/';

    constructor(){
        this.title = 'Hotel Stefanos';        
    }
}