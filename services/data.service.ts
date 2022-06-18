import {HttpClient, HttpParams} from "@angular/common/http";
import {IData} from "../interfaces/data.interface";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  static BASE_URL: string = 'http://localhost:4200/assets/data.json';
  // static APPID: string = '';
  constructor(private httpClient: HttpClient) {
  }
  currentData(dataCode: string){
    var parameters = new HttpParams();
    // parameters = parameters.append('q',dataCode);
    // parameters = parameters.append('appid',DataService.APPID);
    // parameters = parameters.append('units','metric');
    return this.httpClient.get<IData>(DataService.BASE_URL, {params: parameters})
  }
}
