import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeammatesService {

  constructor() { }

  getTestUser() {
    return 'Vasya';
  }
}
