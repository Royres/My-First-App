import { createAction, props } from "@ngrx/store"
import { User } from "../interfaces/users.interface";

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());

export const addUser = createAction('[User] Add User', props<{ newUser: User }>());
export const addUserSuccess = createAction('[User] Add User Success', props<{ newUser: User }>());
export const addUserFailure = createAction('[User] Create User Failed', props<{ error: any }>());

export const editUser = createAction('[User] Edit User', props<{ editedUser: User }>());
export const editUserSuccess = createAction('[User] Edit User Success', props<{ editedUser: User }>());
export const editUserFailure = createAction('[User] Edit User Failure', props<{ error: any }>());

export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ id: number }>());
export const deleteUserFailure = createAction('[User] Delete User Failure', props<{ error: any }>());
