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
    this.teammatesService.getTestUser();
  }
}
