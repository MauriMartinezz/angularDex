import { Component, OnInit } from '@angular/core';
import { PokeService } from './services/poke.service';
import { ɵPLATFORM_WORKER_UI_ID } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pokedex';


  constructor(private poke: PokeService){

  }
  
  ngOnInit(){

      }


}
