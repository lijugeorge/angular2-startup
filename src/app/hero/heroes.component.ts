import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'; 
import { HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes-component.html',
  styleUrls:['./heroes.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  
  selectedHero : Hero;
  title = 'Tour of Heroes';
  heroes: Hero[];

  constructor(private heroService: HeroService){

  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  } 

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 }

 


