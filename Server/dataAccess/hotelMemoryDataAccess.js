import fs from 'fs';
import path from 'path';
import { HotelModel } from '../models/hotelsModel';
import { HotelMockData } from '../mockdata/hotelsMockData';

export class HotelMemoryDataAccess {
    
    /*try {
        console.log('i loaded data again');
        HotelMockData.HOTELS = JSON.parse(fs.readFileSync(path.resolve('./mockdata/data.json'), 'utf8'));    
    } catch (error) { console.log(error)}*/    

    //callback(err, dataReturned)
    list(callback) {
        callback(null, HotelMockData.HOTELS);
    }

    find(id, callback) {
        try {
            const hotelFound =  HotelMockData.HOTELS.find(hotel => {
                return hotel.id == id;
            });
            callback(null, hotelFound);    
        } catch (error) {
            callback(error, null);
        }        
    }

    findByName(hotelName, callback){
        try {
            let hotelFound = HotelMockData.HOTELS.filter(hotel => {                
                return hotel.name.toLowerCase().includes(hotelName.toLowerCase());
            });

            callback(null, hotelFound);
        } catch (error) {
            callback(error, null);
        }
    }

    findByStars(hotelStars, callback){
        try {
            let hotelFound = HotelMockData.HOTELS.filter(hotel => {                
                return hotelStars.includes(hotel.stars);
            });

            callback(null, hotelFound);
        } catch (error) {
            callback(error, null);
        }
    }

    findByStars(hotelStars, callback){
        try {
            let hotelFound = HotelMockData.HOTELS.filter(hotel => {                
                return hotel.stars == hotelStars;
            });

            callback(null, hotelFound);
        } catch (error) {
            callback(error, null);
        }
    }

    create(hotel, callback){
        const new_hotel = new HotelModel(hotel);        
        const newHotelObject = new_hotel.toObject({ getters: true, virtuals:false });        
        HotelMockData.HOTELS.push(newHotelObject);
        callback(null, newHotelObject);
    }

    update(id, hotel, callback){
        try {
            const hotelIndex = HotelMockData.HOTELS.findIndex(hotelItem => {
                return hotelItem.id == id;
            });

            if(hotelIndex == -1)
                callback('not found', null);
            else{
                HotelMockData.HOTELS[hotelIndex] = hotel;
                callback(null, hotel);
            }
        } catch (error) {
            callback(error, null);
        }
    }

    deleteHotel(id, callback){
        try {
            
            HotelMockData.HOTELS = HotelMockData.HOTELS.filter(data =>
                data.id !== id
            );
            callback(null, HotelMockData.HOTELS);
            
        } catch (error) {
            callback(error, null);
        }
    }
}