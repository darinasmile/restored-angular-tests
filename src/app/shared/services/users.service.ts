import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name: string = null;

  constructor() { }

  savePmName(name: string) {
    this.name = name;
  }

  takePmName(): string | null {
    return this.name;
  }

  logout() {
    this.name = null;
  }
}
