import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { WhichComponent } from './components/which/which.component';
import { FilterComponent } from './components/filter/filter.component';


const routes: Routes = [
  {
    path: 'home', component: PokelistComponent
  },
  {
    path: 'pokemon/:id', component: PokemonComponent
  },
  {
    path: 'which', component: WhichComponent
  },
  {
    path: 'search/:term' , component: FilterComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
