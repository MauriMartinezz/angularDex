import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemons } from 'src/app/interfaces/pokemons';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  searchResult: Pokemons[] = []
  constructor(private poke: PokeService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.filter(params["term"])
    })
  }

  filter(term){
    let filter:Pokemons[] = []
    filter = this.poke.searchPokemon(term)
    this.searchResult = filter
  }

  redirect(id: number){
    this.router.navigateByUrl('pokemon/' + id)
  }
}
