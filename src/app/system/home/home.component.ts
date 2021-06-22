import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.name = this.userService.takePmName() || '';
  }

}
