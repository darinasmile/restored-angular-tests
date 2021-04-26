import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeammatesService {

  constructor() { }

  getTestUser() {
    return 'Vasya';
  }

  getObservableValue() {
    return of('Vasya 2.0');
  }

  getPromiseValue() {
    return new Promise<string>((resolve) => resolve('Vasya v3.0'))
  }
}
