import { Component, Inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from "@angular/material/dialog";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { User } from "../../interfaces/users.interface";
import { UsersFormService } from "../../services/users-form.service";

@Component({
  selector: 'create-edit-user',
  standalone: true,
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss'],
  imports: [
    MatDialogActions,
    MatIcon,
    MatFormField,
    MatDialogContent,
    FormsModule,
    ReactiveFormsModule,
    MatIconButton,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogClose
  ]
})
export class CreateEditUserComponent {
  readonly form = this.formService.getUsersForm(this.data);

  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: User,
              private readonly dialogRef: MatDialogRef<CreateEditUserComponent>,
              private readonly formService: UsersFormService) {}

  closes(){
     if (this.form.valid) {
       this.dialogRef.close({
         ...this.form.value,
       })} else {
       return
     }
  }
}
