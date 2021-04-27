import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/models';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[]

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

}
