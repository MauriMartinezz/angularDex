import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { map, filter }        from 'rxjs/operators'
import { Pokemons }   from '../interfaces/pokemons';
import { Poke }       from '../interfaces/poke';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  pokemonsArr: Pokemons[] = []
  poke: Poke;
  colors: any ={
    normal  : '#B0AEA1',
    grass   : '#7BC45B',
    fire    : '#EB4D44',
    water   : '#46A0F8',
    fighting: '#AF5845',
    flying  : '#6E97EF',
    poison  : '#A35994',
    ground  : '#D4BB5E',
    rock    : '#BCAE71',
    bug     : '#B0C043',
    ghost   : '#6E6DBB',
    electric: '#FACE55',
    psychic : '#EC5BA1',
    ice     : '#80DEFA',
    dragon  : '#826FEC',
    dark    : '#855F52',
    steel   : '#B3B2C4',
    fairy   : '#E6A0E6'
  }
  results: string;
  pokeResult: Pokemons;
  constructor(private http: HttpClient) {
   console.log('service loaded')
  }
  getPokemon(id){
    let results: Pokemons[] = []
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
             .pipe(map((map: Pokemons)=>{
             results[id] = {
               name: map.name,
               id: map.id,
               sprite: map['sprites'].front_default,
               display: 'block'
             }
             this.pokemonsArr[id] = results[id]
             return results
            }))
  } 
    pokeDetail(id:number){
     return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
               .pipe(map((map: any)=>{
                 this.poke = {
                   name: map.name,
                   id: map.id,
                   sprite: map["sprites"].front_default,
                   spriteShiny: map["sprites"].front_shiny,
                   types:[
                           {
                             name: map["types"][0].type.name, 
                             color: this.colors[map["types"][0].type.name]
                           }
                   ],
                   abilities: [{
                     ability: map["abilities"][0].ability.name
                   }],
                   stats:[
                     {
                       name:'',
                       value: 2
                     }
                   ],
                   weight: map.weight,
                   height: map.height*10,
                   exists: true
                 }
                  if(map["types"].length > 1){
                    this.poke.types.push({
                      name: map["types"][1].type.name,
                      color: this.colors[map["types"][1].type.name]
                    })
                  }
                  if(map["abilities"].length > 1){
                    this.poke.abilities.push({
                      ability: map["abilities"][1].ability.name
                    })
                  }
                  for(let i = 0; i < map.stats.length; i++){
                    this.poke.stats[i] = {
                      name: map.stats[i].stat.name,
                      value: map.stats[i].base_stat
                    }
                  }
                 return this.poke
               }))
   }
   searchPokemon(term: string){
     let filter:Pokemons[] = []
     this.pokemonsArr.forEach(element=>{
      if(element.name.indexOf(term) > -1){
        filter.push(element)
      }
     })
    return filter
   }
 }