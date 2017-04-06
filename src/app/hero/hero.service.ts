import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { heroes } from  './mock-hero';

@Injectable()

export class HeroService{
    getHeroes(): Hero[] {
    return heroes;
  }
}