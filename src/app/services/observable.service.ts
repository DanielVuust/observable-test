import { Injectable } from '@angular/core';
import { concatWith, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  constructor() { 
  }

  getRandomObservable(){
    return of(Math.random());
  }
}
