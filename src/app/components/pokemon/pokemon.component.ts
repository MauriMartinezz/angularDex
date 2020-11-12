import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Poke } from '../../interfaces/poke'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  back = faArrowCircleLeft;
  forward = faArrowCircleRight
  pokemon: Poke;
  default: boolean = true;
  nameNext: string;
  namePrevious: string;

  constructor(private poke: PokeService,
              private route: ActivatedRoute,
              private router: Router) {       
              }

  ngOnInit(): void {
          this.route.params.subscribe(params=>{
            this.pokeInfo(params['id'])
          })
  }


  pokeInfo(id: any){
    let int = parseInt(id)
    this.poke.pokeDetail(id)
    .subscribe(data=>{
              this.pokemon      = data;
              this.nameNext     = this.poke.pokemonsArr[int+1]?.name
              this.namePrevious = this.poke.pokemonsArr[int-1]?.name
            })
  }
   redirectNext(){
     this.poke.pokeDetail(this.pokemon.id + 1)
               .subscribe(data=>{
                 this.router.navigateByUrl('/pokemon/' + data.id)
               })
   }
  
  redirectPrevious(){ 
    this.poke.pokeDetail(this.pokemon.id - 1)
    .subscribe(data=>{
      this.router.navigateByUrl('/pokemon/' + data.id)
    })
  }
  close(){
    this.router.navigateByUrl('/home')
  }

}
