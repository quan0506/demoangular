import {Component} from "@angular/core";
import {IMission, INav} from "../interfaces/assigment2.interface";
import {Assigment2Service} from "../services/assigment2.service";

@Component({
  selector: "app-assigment2",
  templateUrl:"./assigment2.component.html",
  styleUrls: ['./assigment2.component.css']
})
export class Assigment2Component {
  navs: INav[] = [];
  missions: IMission[] = [];

  constructor(private assigment2Service: Assigment2Service) {
  }

  ngOnInit(){
    this.assigment2Service.missionlist().subscribe(value =>{
      this.navs = value.data.navs;
      this.missions = value.data.missions;
    })
  }

  changeMissiions(nav:string){
    var new_list: IMission[] = [];
    this.assigment2Service.missionlist().subscribe(value => {
      for (var i=0;i<value.data.missions.length;i++){
        if (value.data.missions[i].nav == nav ){
          new_list.push(value.data.missions[i]);
        }
      }
      this.missions = new_list;
    })
  }

}
