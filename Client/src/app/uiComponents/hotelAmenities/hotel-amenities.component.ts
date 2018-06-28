import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
@Component({
    selector: 'hotel-amenities',
    templateUrl: './hotel-amenities.component.html',
    styleUrls: ['./hotel-amenities.component.scss']
})
export class HotelAmenitiesComponent{
    @Input() amenities: string[];

    

    

}