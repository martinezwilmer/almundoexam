import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from '../../environments/environment';
import { Hotel } from '../models/hotel';

@Injectable()
export class HotelService {
    constructor(private http: HttpClient){ }

    getHotels() {
        const promise = new Promise<Hotel[]>((resolve, reject) =>{
            this.http.get(environment.api_base_url )
            .toPromise()
            .then(
                (data: Hotel[]) => {
                    resolve(data);
                },
                (msg) => {
                    reject(msg);
                }
            )
        });
        return promise;
    }

    getHotelByName(hotelName: string){
        const promise = new Promise<Hotel[]>((resolve, reject) =>{
            this.http.get(environment.api_base_url + '/hotelname/' + hotelName)
            .toPromise()
            .then(
                (data: Hotel[]) => {
                    resolve(data);
                },
                (msg) => {
                    reject(msg);
                }
            )
        });
        return promise;
    }

    getHotelByStars(hotelStars: Number){
        const promise = new Promise<Hotel[]>((resolve, reject) =>{
            this.http.get(environment.api_base_url + '/hotelstars/' + hotelStars)
            .toPromise()
            .then(
                (data: Hotel[]) => {
                    resolve(data);
                },
                (msg) => {
                    reject(msg);
                }
            )
        });
        return promise;
    }
}