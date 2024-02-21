import { Injectable } from '@angular/core';
import { User } from "../interfaces/users.interface";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: User[] = [];

  public deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id)
    return of(this.users);
  }

  public createUser(newUser: any): Observable<User> {
    this.users = [...this.users, newUser];
    return of(newUser);
  }

  public editUser(editedUser: User): Observable<User> {
    this.users = this.users.map(user => (user.id === editedUser.id ? editedUser : user));
    return of(editedUser);
  }
}
