import { inject, Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CreateEditUserComponent } from "../components/create-user/create-edit-user.component";
import { User } from "../interfaces/users.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersModalService {
  private matDialog = inject(MatDialog);

  openDialog(user?: User): Observable<User | undefined> {
    const dialogRef : MatDialogRef<CreateEditUserComponent, User> = this.matDialog.open(CreateEditUserComponent, {
      width: '500px',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
      data: user
    });
    return dialogRef.afterClosed();
  }
}
