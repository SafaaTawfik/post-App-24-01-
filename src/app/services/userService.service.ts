import { Injectable } from '@angular/core';
import { User } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private allusers: User[] = [{ id: 1, name: "Safaa" }, { id: 2, name: "Rokaya" }, { id: 3, name: "Isalam" }]
  getUsers() {
    return this.allusers;
  }
  constructor() { }

}
