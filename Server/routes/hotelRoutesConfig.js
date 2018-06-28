import { HotelController } from '../controllers/hotelController';
import { HotelControllerProd } from '../controllers/hotelController.prod';
import { config } from '../config';

//environment value, validated by middleware
let hotelController = config.environmet == "development" ? HotelController : HotelControllerProd;

export const hotelRoutesConfig = 
    [
        {
            path: '/api/v1/hotels',
            getMethod: hotelController.list,
            postMethod: hotelController.create
        },
        {
            path: '/api/v1/hotels/:hotelId',
            getMethod: hotelController.find,
            putMethod: hotelController.update,
            deleteMethod: hotelController.deleteHotel
        },
        {
            path: '/api/v1/hotels/hotelname/:hotelName',
            getMethod: hotelController.findByName
        },
        {
            path: '/api/v1/hotels/hotelstars/:hotelStars',
            getMethod: hotelController.findByStars
        }
    ]
