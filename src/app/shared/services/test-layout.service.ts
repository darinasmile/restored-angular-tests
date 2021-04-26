import { Injectable } from '@angular/core';
import { TeammatesService } from './teammates.service';

@Injectable({
  providedIn: 'root'
})
export class TestLayoutService {

  constructor(
    private teammatesService: TeammatesService
  ) { }

  getVasya() {
    return this.teammatesService.getTestUser();
  }
}
