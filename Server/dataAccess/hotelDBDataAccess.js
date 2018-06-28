import { HotelModel } from '../models/hotelsModel';

export class HotelDBDataAccess {
    list(callback){
        HotelModel.find({}, (err, hotel) => {
            if(err)
                callback(err, null);

            callback(null, hotel);
        });
    }

    find(id, callback){
        try {
            HotelModel.find({id: id}, (err, hotel) => {
                if(err)
                    callback(err, null);
                if(hotel.length == 0)
                    hotel = null;
                callback(null, hotel);                
            });    
        } catch (error) {
            callback(error, hotelFound);
        }
    }

    findByName(hotelName, callback){
        try {
            var searchQuery=new RegExp(hotelName, 'i');
            var query = { name : searchQuery };
            HotelModel.find(query, (err, hotel) =>{
                if(err)
                    callback(err, null);
                if(hotel.length == 0)
                    hotel = null;
                callback(null, hotel);
            });
        } catch (error) {
            callback(error, null);
        }
    }

    findByStars(hotelStars, callback){
        try {
            HotelModel.find({stars : { "$in": hotelStars}}, (err, hotel) =>{
                if(err)
                    callback(err, null);
                if(hotel.length == 0)
                    hotel = null;
                callback(null, hotel);
            });
        } catch (error) {
            callback(error, null);
        }
    }

    create(hotel, callback){
        try {
            const new_hotel = new HotelModel(hotel);
            new_hotel.save((err, hotel) => {
                if (err)
                    callback(err, null);
    
                callback(null, hotel);
            });    
        } catch (error) {
            callback(error, null);
        }
        
    }    
    update(id, hotelToModify, callback){
        try {
            HotelModel.findOneAndUpdate({id: id}, hotelToModify,{new: true}, (err, hotel) =>{
                if(err){
                    callback(err, null);
                }
                callback(null, hotel);
            });
        } catch (error) {
            callback(error, null);
        }
    }


    deleteHotel(id, callback){
        try {
            console.log('im here inside deletehotel');
            HotelModel.findOneAndRemove({id: id}, (err, hotel) =>{
                if(err)
                    callback(err, null);

                callback(null, hotel);
            });
        } catch (error) {
            callback(error, null);
        }
    }
}