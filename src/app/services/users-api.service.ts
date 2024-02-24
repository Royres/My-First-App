import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../interfaces/users.interface";
import { API_URL } from "../http/api-url.token";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private readonly apiUrl = inject(API_URL);

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  public deleteUser(id: number): Observable<unknown> {
    return this.http.delete(this.apiUrl + `/users/${id}`);
  }

  public addUser(user: User): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(this.apiUrl + '/users', user);
  }

  public editUser(user: Partial<User>): Observable<User> {
    return this.http.patch<User>(this.apiUrl + `/users/${user.id}`, user);
  }
}
