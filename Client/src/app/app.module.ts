import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { HotelListComponent } from "./views/hotel/hotelList/hotel-list.component";
import { HotelCardComponent } from './uiComponents/hotelCard/hotel-card.component';
import { HotelRateComponent } from './uiComponents/hotelRate/hotel-rate.component';
import { HotelAmenitiesComponent } from './uiComponents/hotelAmenities/hotel-amenities.component';
import { HotelFilterComponent } from './uiComponents/hotelFilter/hotel-filter.component';

import { HotelService } from './services/hotels.service';
@NgModule({
  declarations: [
    AppComponent,
    HotelCardComponent,
    HotelListComponent,
    HotelRateComponent,
    HotelAmenitiesComponent,
    HotelFilterComponent
  ],
  imports: [    
    CommonModule,
    HttpClientModule,
    //MatCardModule,
    BrowserModule,
    appRouting,
    
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
