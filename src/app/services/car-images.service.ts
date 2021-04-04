import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../model/carImage';
import { ListResponseModel } from '../model/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImagesService {
  apiUrl="https://localhost:44306/api/"

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let path=this.apiUrl+ "carimages/getimagesbycarid?carId=" +carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(path);
  }

}
