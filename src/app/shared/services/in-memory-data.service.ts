import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { developersData } from '../models/inner-db-data';
import { Feedback, User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const developers: User[] = developersData;
    const feedbacks: Feedback[] = [];

    return {
      developers,
      feedbacks
    };
  }
}
