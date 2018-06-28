import { Component, OnInit } from '@angular/core';
import { HotelRateComponent } from '../../../uiComponents/hotelRate/hotel-rate.component';
import { HotelFilterComponent } from '../../../uiComponents/hotelFilter/hotel-filter.component';
import { HotelService } from '../../../services/hotels.service';
import { Hotel } from "../../../models/hotel";

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit{

    hotels: Hotel[];
    filtered:boolean = false;
    filterCollapsed:boolean = true;

    constructor(private hotelService:HotelService){}

    ngOnInit(): void {
     this.hotelService.getHotels().then(hotels =>  this.hotels = hotels);
    }    

    getHotelByName(hotelName: string){
        if(hotelName.trim()!== ''){
            this.hotelService.getHotelByName(hotelName).then(hotels => {
                this.hotels = hotels;
                this.filtered = true;
            });
        }
    }

    getHotelByStars(stars: Number){
        this.hotelService.getHotelByStars(stars).then(hotels => {
            this.hotels = hotels;
        });
    }

    clearFilter(){
        this.filtered = false;
        this.ngOnInit();
    }

    collapseFilter(){
        this.filterCollapsed = !this.filterCollapsed;
    }
}