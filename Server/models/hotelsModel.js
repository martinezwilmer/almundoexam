import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    id: String,
    name: String,
    stars: Number,
    price: Number,
    image: String ,
    amenities: [String]
},{id: false});
export const HotelModel =  mongoose.model('Hotels', HotelSchema);

