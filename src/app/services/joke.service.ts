import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Joke } from '../classes/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  jokes: Array<Joke> = [];
constructor() {
  this.jokes.push(new Joke("Hvad er ligehedden mellem en fugl og et franskbrød", "De kan begge to flye ud over brødet"));
  this.jokes.push(new Joke("Der kom en ål svømmende hen til en borg, borgen blev opkaldt efter ålen, hvad hedder borgen?", "Svenborg, fordi ålen hed Sven"));
  this.jokes.push(new Joke("Joke3", "punchline3"));
  this.jokes.push(new Joke("Joke4", "punchline4"));

}
  getJokeCount() : number{
    return this.jokes.length;
  }
  getJoke(index: number) : Observable<string>{
    return of(this.jokes[index].joke);
  }
  getPunchline(index: number) : Observable<string>{
    return of(this.jokes[index].punchline);
  }
}
