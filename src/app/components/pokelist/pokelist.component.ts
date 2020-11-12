import { Component, OnInit, DoCheck} from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';
import { Router,ActivatedRoute } from '@angular/router'
import { Pokemons } from 'src/app/interfaces/pokemons';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {
  pokeList: Pokemons[] = [];
  
  sprite: string;
  shiny: boolean = false;
  constructor(private poke: PokeService,
              private route: Router,
              private activated: ActivatedRoute) {
              }
   ngOnInit(){
     this.activated.params.subscribe(params=>{
     this.pokeID(params['term'])
     })
    // this.pokeID()

  }
pokeID(term){
   for(let i = 1; i <= 152; i++){
     this.poke.getPokemon(i)
              .subscribe(data =>{
                // this.pokeList[i-1] = data[i]
                // if(term == undefined || term == null || element.name.indexOf(term) > -1){
                  //   element.display = 'block'
                  // }else{
                    //   element.display = 'none'
                    // }
                data.forEach(element=>{
                  this.pokeList[i-1] = data[i]
                  if(term == undefined || term == null || element.name.indexOf(term) > -1){
                       element.display = 'block'
                     }else{
                       element.display = 'none'
                     }
                })
     })
     }
    }
    search(term: string){
    // this.filter = this.pokeList
    let termino = term?.toLowerCase()
    // for(let i = 0; i<this.pokeList.length;i++){
    //    if(this.pokeList[i].name.indexOf(termino) > -1){
    //      this.pokeList[i].display = 'block'
    //    }else{
    //     this.pokeList[i].display = 'none'
    //    }
    // }
      // this.pokeList.forEach(element=>{
      //   if(element.name.indexOf(termino) > -1){
      //     element.display = 'block'
      //   }else{
      //    element.display = 'none'
      //   }
        // console.log(element)
}
  redirect(id: number) {
    this.route.navigate(['/pokemon', id + 1])
  }
}