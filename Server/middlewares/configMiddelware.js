import { config } from '../config';

export const validConfigMiddleware = (req, res, next) => {
    if(config.environmet !== "development" && config.environmet !== "production"){
        res.status(500).send('Server configuration error. Check the environment value');
    }
    next();
}