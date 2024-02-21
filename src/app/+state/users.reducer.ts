import { createReducer, on } from "@ngrx/store";
import { User } from "../interfaces/users.interface";
import {
  addUserSuccess,
  addUserFailure,
  deleteUserSuccess,
  editUserSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess, editUser,
} from "./users.actions";

export const USERS_FEATURE_KEY = 'users';

export interface userState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: userState = {
  users: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({
    ...state,
    loading: true,
  })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    loading: false,
  })),

  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(addUserSuccess, (state, { newUser }) => ({
    ...state,
    users: [...state.users, newUser],
  })),

  on(addUserFailure, (state, { error }) => ({
    ...state,
    error: error
  })),

  on(editUser, state => ({
    ...state,
    loading: true
  })),

  on(editUserSuccess, (state, { editedUser }) => ({
    ...state,
    users: state.users.map( user => user.id === editedUser.id ? editedUser : user),
    error: null
  })),

  on(deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id),
    error: null
  }))
)
