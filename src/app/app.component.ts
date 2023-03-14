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

  constructor(private jokeService: JokeService) {
    this.displayJokesOnInterval();
  }
  async displayJokesOnInterval(){
    this.displayRandomJokeAndPunchLine();

    setInterval(()=>{
      this.displayRandomJokeAndPunchLine();

    }, 7000);
  }
  async displayRandomJokeAndPunchLine(){
    let index = Math.floor(Math.random() * this.jokeService.getJokeCount());
    this.joke$ = this.jokeService.getJoke(index);
    setTimeout( () => { 
      this.punchline$ = this.jokeService.getPunchline(index); 
    this.playSound();

    }, 3000 );
  }
  async playSound(){
    console.log('sound');
    let audio = new Audio();
    audio.src = "../assets/rimshot-joke-funny-80325.mp3";
    audio.load();
    audio.play();
  }
}
