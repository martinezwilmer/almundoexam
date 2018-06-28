import { HotelDataAccessFactory } from '../dataAccess/hotelDataAccess';

const list = (req, res) => {
    const hotelAccess = HotelDataAccessFactory.getHotelDataAccess();

    console.log('Method List called');
    hotelAccess.list((err, hotel) =>{
        if(err)
            res.send(err);
        console.log('Not error found');
        console.log('data to return:');
        console.log(hotel);
        res.json(hotel);
    }); 
}

const find = (req, res) => {
    console.log('Method find called');
    const hotelAccess = HotelDataAccessFactory.getHotelDataAccess();
    hotelAccess.find(req.params.hotelId, (err, hotel) =>{
        if(err){
            res.status(500).send(err);
        }else{
            if(!hotel)
                res.status(204).send('No data found');
            else
                res.json(hotel);
        }
    });
}

const findByName = (req, res) => {
    console.log('Method find by name called');
    const hotelAccess = HotelDataAccessFactory.getHotelDataAccess();
    hotelAccess.findByName(req.params.hotelName, (err, hotel) => {
        if(err){
            res.status(500).send(err);
        }else{
            if(!hotel)
                res.status(204).send('No data found');
            else
                res.json(hotel);
        }
    });
}

const findByStars = (req, res) => {
    console.log('Method Find byb stars called');
    const hotelAccess = HotelDataAccessFactory.getHotelDataAccess();
    hotelAccess.findByStars(req.params.hotelStars.split(','), (err, hotel) => {
        if(err){
            res.status(500).send(err);
        }else{
            if(!hotel)
                res.status(204).send('No data found');
            else
                res.json(hotel);
        }
    });
}

const create = (req, res) => {
    console.log('Method Create called');
    const hotelAccess = HotelDataAccessFactory.getHotelDataAccess();
    hotelAccess.create(req.body, (err, hotel)=>{
        if(err)
            res.send(err);
        else
            res.json(hotel);
    });
}

const update = (req, res) => {
    console.log('Method Update called');
    const hotelAccess = HotelDataAccessFactory.getHotelDataAccess();
    hotelAccess.update(req.params.hotelId, req.body, (err, hotel)=>{
        if(err)
            res.send(err);
        else
            res.json(hotel);
    });
}

const deleteHotel = (req, res) => {
    console.log('Method Update called');
    const hotelAccess = HotelDataAccessFactory.getHotelDataAccess();
    hotelAccess.deleteHotel(req.params.hotelId, (err, hotel)=>{
        if(err)
            res.send(err);
        else
            res.json(hotel);
    });
}

export const HotelController = {
    list,
    find,
    findByName,
    findByStars,
    create,
    update,
    deleteHotel
}
