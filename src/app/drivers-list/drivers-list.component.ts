import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent {
  isOnline: boolean = true;

  flag = false;

  colorA = "grey";

  colorB = "violet";

  book:any = {
    name: "Harry Flotteur 12",
    price: null,
    author: "Georges Peterson"
  }

  constructor(private data:DataService){
    this.drivers = this.data.getAllDrivers()
  }

  fruits:any = ["Banane", "Pomme", "Fraise", "Kiwi", "Pêche"];


  stock:number = 5

  color:string = "aqua";

  getColor(){
    return "red";
  }


  isCentred:any;

  isHere:any;

  onClick():boolean{
    if(this.isCentred){
      return this.isCentred = false;
    }
    else {
      return this.isCentred = true;
    }

  }

  onClickHere():boolean{
    if(this.isHere){
      return this.isHere = false;
    }
    else {
      return this.isHere = true;
    }

  }

  fini:any;

  stockBtn: number = 10;

  onClickDecrease(){
    if(this.stockBtn<=0){

    } else {
      this.stockBtn = this.stockBtn-1;
      console.log(this.stockBtn);

    }
  }



  drivers: any;

}

