import { Component, inject, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersCardComponent } from "../users-card/users-card.component";
import { CommonModule } from "@angular/common";
import { MatButton } from "@angular/material/button";
import { MatDialogActions } from "@angular/material/dialog";
import { CreateEditUserComponent } from "../create-edit-user/create-edit-user.component";
import { User } from "../../interfaces/users.interface";
import { tap } from "rxjs";
import { UsersModalService } from "../../services/users-modal.service";
import { deleteUser, loadUsers } from "../../+state/users.actions";
import { Store } from "@ngrx/store";
import { selectUsers } from "../../+state/users.selector";
import { addUser } from "../../+state/users.actions";

@Component({
  selector: 'users-list',
  standalone: true,
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.scss'],
  imports: [RouterModule, UsersCardComponent, CommonModule, MatButton, CreateEditUserComponent, MatDialogActions]
})
export class UsersListComponent implements OnInit{
  private store = inject(Store);
  private usersModalService = inject(UsersModalService);

  users$ = this.store.select(selectUsers);

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  addUser(newUser: User) {
    this.store.dispatch(addUser({ newUser }));
  }

  openCreateDialog() {
    this.usersModalService.openDialog()
      .pipe(
        tap(newUser => {
          if (newUser) {
            this.addUser(newUser);
          }
        }))
      .subscribe()
  }

  removeUser(id: number) {
    this.store.dispatch(deleteUser({ id }));
 }
}
