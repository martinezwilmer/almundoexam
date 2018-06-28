import { HotelMemoryDataAccess } from './hotelMemoryDataAccess';
import { HotelDBDataAccess } from './hotelDBDataAccess';
import { config } from '../config';

export class HotelDataAccessFactory {    

    static getHotelDataAccess(){
        if(!config.useDataBase){
            return new HotelMemoryDataAccess();
        }else{            
            return new HotelDBDataAccess();
        }
    }
}