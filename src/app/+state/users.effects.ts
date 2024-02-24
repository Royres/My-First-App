import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {
  addUser,
  addUserSuccess,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
  editUser,
  editUserSuccess,
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  addUserFailure,
  editUserFailure
} from "./users.actions";
import { UsersApiService } from "../services/users-api.service";
import { of } from "rxjs";

@Injectable()
export class UsersEffect {
  constructor(
    private actions$: Actions,
    private usersApiService: UsersApiService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.usersApiService.getUsers().pipe(
          map((value) => loadUsersSuccess({users: value})),
          catchError((error) => of(loadUsersFailure({error})))
        )
      )
    )
  )

  addUser$ = createEffect(()=>
    this.actions$.pipe(
      ofType(addUser),
      mergeMap(({newUser})=>
        this.usersApiService.addUser(newUser).pipe(
          map((user)=>addUserSuccess({newUser})),
          catchError((error)=>of(addUserFailure({error})))
        )
      )
    )
  )

  deleteUsers$ = createEffect(()=>
    this.actions$.pipe(
      ofType(deleteUser),
      switchMap(({id})=>
        this.usersApiService.deleteUser(id).pipe(
          map(()=>deleteUserSuccess({id})),
          catchError(error => of(deleteUserFailure({ error })))
        )
      )
    )
  )

  editUsers$ = createEffect(()=>
    this.actions$.pipe(
      ofType(editUser),
      switchMap(({editedUser})=>
        this.usersApiService.editUser(editedUser).pipe(
          map(()=>editUserSuccess({editedUser})),
          catchError(error => of(editUserFailure({ error })))
        )
      )
    )
  )
}

