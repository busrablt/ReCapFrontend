import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';
import { CarDetail } from '../model/carDetail';
import { ListResponseModel } from '../model/listResponseModel';
import { SingleResponseModel } from '../model/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44306/api/"

  constructor(private httpClient:HttpClient) { }
  
  getCars():Observable<ListResponseModel<Car>>{
    let path=this.apiUrl+ "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let path=this.apiUrl+ "cars/getbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let path=this.apiUrl+ "cars/getbycolorid?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarDetails(carId:number):Observable<ListResponseModel<CarDetail>>{
    let path=this.apiUrl+ "cars/getcardetailsbyid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

}

