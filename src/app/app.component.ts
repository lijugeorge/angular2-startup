import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero'; 
import { HeroService} from './hero/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app-component.html',
  styleUrls:['./app.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  
  selectedHero : Hero;
  title = 'Tour of Heroes';
  heroes: Hero[];

  constructor(private heroService: HeroService){

  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  } 

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 }

 


