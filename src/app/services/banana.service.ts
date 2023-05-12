import { Injectable } from "@angular/core";

@Injectable()

export class BananaService {

  fruit:string = "banane";

  prix: number = 10;

  constructor(){}

    getFruit(){

      console.log(this.fruit);

    }

}
