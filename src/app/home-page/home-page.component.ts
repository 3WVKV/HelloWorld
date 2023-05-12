import { Component, OnInit } from '@angular/core';
import { BananaService } from '../services/banana.service';
import { RestaurantService } from '../services/restaurant.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  bestCars:any;
  bestDrivers:any;

  // "banane" et "bio" peuvent etre modifier ( ça sert a créer une variable, donc au choix)
  constructor(private banane:BananaService, private bio:RestaurantService, private data:DataService){}

    // banane.getFruit()
    // console.log(bio.getPrice())

  ngOnInit(){
    this.bestDrivers = this.data.getNbBestDrivers(3);
    this.bestCars = this.data.getNbPowerfulCars(2);
  }



}
