import {Component} from "@angular/core";
import {IData} from "../interfaces/data.interface";
import {DataService} from "../services/data.service";

@Component({
  selector: "app-data",
  templateUrl:"./data.component.html",
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  data!: IData;
  dataCode: string = '';
  constructor(private service: DataService ) {
  }
  ngOnInit(){
    this.getData();
  }
  getData(){
    this.service.currentData(this.dataCode).subscribe(value => {this.data = value;})
  }
}
