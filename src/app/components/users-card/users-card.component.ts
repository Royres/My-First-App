import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { User } from "../../interfaces/users.interface";
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { MatDialogActions } from "@angular/material/dialog";
import { UsersModalService } from "../../services/users-modal.service";
import { tap } from "rxjs";
import { Store } from "@ngrx/store";
import { editUser } from "../../+state/users.actions";

@Component({
  selector: 'users-card',
  standalone: true,
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss'],
  imports: [
    MatCard,
    MatCardContent,
    MatButton,
    MatDialogActions
  ]
})
export class UsersCardComponent {
  private store = inject(Store);
  private usersModalService = inject(UsersModalService);
  @Input({ required: true }) user!: User;
  @Output() removeUser = new EventEmitter<number>();


  deleteUser(id: number) {
    this.removeUser.emit(id);
  }

  openEditDialog() {
    this.usersModalService.openDialog(this.user)
      .pipe(
          tap(editedUser => {
            if (!editedUser) {
              return;
            }
            this.store.dispatch(editUser({ editedUser }))})
      )
      .subscribe()
  }
}
