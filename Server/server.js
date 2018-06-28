import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { HotelModel } from './models/hotelsModel';
import { validRouteMiddleware } from './middlewares/routesMiddleware';
import { validConfigMiddleware } from './middlewares/configMiddelware';
import { accessAuthMiddleware } from './middlewares/accessAuthMiddleware';
import { routes } from './routes/hotelsRoutes';
import { config } from './config';
import { HotelMockData } from './mockdata/hotelsMockData';

// Server configuration
const app = express();
const port = process.env.port || config.port;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
if(config.useDataBase ){
    //if it wasn't able to connect to database, use the mock hotel data
    mongoose.connect(config.connectionString,{},(err) =>{
        if(err)
            config.useDataBase = false; //Load data from mock hotels data
    });
}

// Body content parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middlewares configurations
//app.use(validRouteMiddleware);  if time available, correct the middleware
app.use(accessAuthMiddleware);
app.use(validConfigMiddleware);

// Routes configuration
routes(app);

//Load mock data
HotelMockData.LoadMockHotels();

app.listen(port, () =>{
    console.log(`RESTful API server started on: ${port}`);
});

