import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IAssigment} from "../interfaces/assigment2.interface";


@Injectable({providedIn: 'root'})


export class Assigment2Service {

  constructor(private httpClient: HttpClient) {}

  missionlist(){
    return this.httpClient.get<IAssigment>('http://localhost:4200/assets/assigment2.json');
  }

}
