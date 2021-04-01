import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../model/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
apiUrl="https://localhost:44306/api/colors/getall"
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl)

  }
}
