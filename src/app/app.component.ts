import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatWith, delay, Observable } from 'rxjs';
import { JokeService } from './services/joke.service';
import { ObservableService } from './services/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke$ : Observable<string> | undefined;
  punchline$ : Observable<string> | undefined;

  jokeService = new JokeService();    

  title = 'observable-test';
  async onclick(){
    let index = Math.floor(Math.random() * this.jokeService.getJokeCount());
    this.joke$ = this.jokeService.getJoke(index);
    setTimeout( () => { 
      this.punchline$ = this.jokeService.getPunchline(index); 
    }, 3000 );
  }
}
