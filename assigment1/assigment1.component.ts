import {Component} from "@angular/core";
import {IMail} from "../interfaces/mail.interface";
import {ICategory} from "../interfaces/category.interface";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: "app-assigment1",
  templateUrl:"./assigment1.component.html",
  styleUrls: ['./assigment1.component.css']
})
export class Assigment1Component {
  mails: IMail[] = [];

  categories: ICategory[] = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(){
    this.weatherService.maillist().subscribe(value => {
      this.categories = value.data.categories;
      this.mails = value.data.mails;
    })
  }
  changeMails(category: string, child: string){
    var new_list: IMail[] = [];
    this.weatherService.maillist().subscribe(value => {
      for (var i=0;i<value.data.mails.length;i++){
        if (value.data.mails[i].category == category && value.data.mails[i].child == child){
          new_list.push(value.data.mails[i]);
        }
      }
      this.mails = new_list;
    })
  }
}
