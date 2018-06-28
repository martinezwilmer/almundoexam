import { HotelController } from '../controllers/hotelController';
import { HotelControllerProd } from '../controllers/hotelController.prod';
import { config } from '../config';
import { hotelRoutesConfig } from './hotelRoutesConfig';

export const routes = (app) => {

    for (const route of hotelRoutesConfig) {
        if(route.getMethod) { app.route(route.path).get(route.getMethod); }
        if(route.postMethod) { app.route(route.path).post(route.postMethod);  }
        if(route.putMethod) { app.route(route.path).put(route.putMethod); console.log(route.putMethod); }
        if(route.deleteMethod) { app.route(route.path).delete(route.deleteMethod);  }
    }

};
