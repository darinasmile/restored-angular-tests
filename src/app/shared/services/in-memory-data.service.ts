import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      { id: 1, name: 'Developer 1' },
      { id: 2, name: 'Developer 2' },
      { id: 3, name: 'Developer 3' },
      { id: 4, name: 'Developer 4' },
      { id: 5, name: 'Developer 5' },
      { id: 6, name: 'Developer 6' },
      { id: 7, name: 'Developer 7' },
      { id: 8, name: 'Developer 8' },
      { id: 9, name: 'Developer 9' },
      { id: 10, name: 'Developer 10' }
    ];

    return { users };
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(({id}) => id)) + 1 : 0;
  }
}
