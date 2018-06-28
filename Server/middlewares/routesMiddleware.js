import { hotelRoutesConfig } from '../routes/hotelRoutesConfig';

export const validRouteMiddleware = (req, res, next) => {
    let url = req.originalUrl;

    if(url[url.length - 1] == '/' )
        url = url.slice(0, -1);

    let configFound = hotelRoutesConfig.find( route => {
        return route.path == url;
    });
    
    // if(!configFound)
    //     res.status(404).send({url: req.originalUrl + ' Not found'})
    
    next();
}