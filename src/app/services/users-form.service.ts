import { inject, Injectable } from "@angular/core";
import { User } from "../interfaces/users.interface";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class UsersFormService {
  private formBuilder = inject(FormBuilder)

  getUsersForm(data?: Partial<User>): FormGroup {
    return this.formBuilder.group({
      id: [data ? data.id : new Date().getTime(), Validators.required],
      name: [data ? data.name : '', Validators.required],
      username: [data ? data.username : '', Validators.required],
      email: [data ? data.email : '', Validators.required],
      phone: [data ? data.phone : '', Validators.required],
    })
  }
}
