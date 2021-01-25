import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/services/userService.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allusers: User[];
  constructor(private usersvc: UserService) { }
  getallusers() {
    this.allusers = this.usersvc.getUsers();
  }
  ngOnInit(): void {
    this.getallusers();
  }

}
