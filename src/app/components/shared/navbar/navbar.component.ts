import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  pokeResult: any[] = []
  constructor(private route: Router) { }
  ngOnInit(): void{}
  search(term: string){
    this.route.navigate(['search/',term])
  }
}