import { Injectable } from '@angular/core';
import { BananaService } from './banana.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  name:string = "LeBeBio"
  prixResto: any;

  constructor(private banana:BananaService) { }

  getPrice():number {

    // prixResto = variable que je crée au choix
    
    return this.prixResto = this.banana.prix *1.4
  }
}
