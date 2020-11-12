import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-which',
  templateUrl: './which.component.html',
  styleUrls: ['./which.component.scss']
})
export class WhichComponent implements OnInit {

  constructor(private poke: PokeService,
              private route: Router) { }

  ngOnInit(): void {
  }

  lucky(){
    let luckyNum = Math.floor(Math.random()* (800 - 1) + 1)
    this.poke.getPokemon(luckyNum)
            .subscribe(data=>{
              this.route.navigateByUrl('/pokemon/' +luckyNum)
            })
  }

}
