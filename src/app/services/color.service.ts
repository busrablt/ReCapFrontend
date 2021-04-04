import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../model/listResponseModel';
import { Color } from '../model/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
apiUrl="https://localhost:44306/api/colors/getall"
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl)

  }
}
