import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
@Component({
    selector: 'hotel-rate',
    templateUrl: './hotel-rate.component.html',
    styleUrls: ['./hotel-rate.component.scss']
})
export class HotelRateComponent implements OnChanges {
    
    @Input() rate: Number;
    @Input() starSize: string = 'large'; //large - small
    hotelStars: Number[] = new Array<Number>();

    ngOnChanges(changes: SimpleChanges): void {
        for (let index = 1; index <= changes.rate.currentValue; index++) 
            this.hotelStars.push(1);
        
    }

}