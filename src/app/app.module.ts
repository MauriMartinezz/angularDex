import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PokeService } from './services/poke.service';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { WhichComponent } from './components/which/which.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokelistComponent,
    NavbarComponent,
    WhichComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
