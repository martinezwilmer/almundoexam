import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HotelListComponent } from "./views/hotel/hotelList/hotel-list.component";
const routes: Routes = [
    { path: '', component: HotelListComponent  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);