import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  // test:string = "Ceci est une phrase test";

  // game = {
  //   title: "Half-Life²",
  //   support: "PC",
  //   date: 2050
  // }

  // getPrice() {
  //   return 28;
  // }


  // isStocked = false;

  // // On peut utilisé getPicture() ou bien coverImage

  // // getPicture(){
  // //   return "https://gaming-cdn.com/images/products/2284/616x353/half-life-2-pc-mac-jeu-steam-cover.jpg?v=1650555068";
  // // }

  // coverImage = "https://gaming-cdn.com/images/products/2284/616x353/half-life-2-pc-mac-jeu-steam-cover.jpg?v=1650555068";

  // // Interpolation

  // // 3 manières on peut faire du calcul ou traitement

  // // IMG SRC ALT
  // // BUTTON DISABLE
  // // INPUT VALUE

  // // Property binding

  // // CRUD

  // // CREATE --> FORM + BDD REDIRECT UX UI
  // // READ --> AFFICHAGE + BDD
  // // UPDATE --> FORM HYDRA + BDD + REDIRECT + TOAST / FLASH
  // // DELETE --> BUTTON ETES VOUS SUR ?? CONFIRM EN JS

  // // Login / Admin / Role
  // // Admin --> dashboard

  // affiche() {
  //   alert("Ok je vois")
  // }

  // truc(){
  //   console.log("aussi simple...")
  // }

  // jeuDeVoiture(){
  //   alert("vroom vrooom")
  // }

  // pouet(){
  //   "http://localhost:4200/cars"
  // }


    carUpdate:any;

    cars: any;

    constructor(private data:DataService) {
      this.cars = this.data.getAllCars()
    }

    ngOnInit() {
      this.carUpdate = new Date();
    }

  }





















