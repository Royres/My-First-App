import { Routes } from '@angular/router';
import { HomePageComponent } from "./components/home/home.component";
import { UsersListComponent } from "./components/users-list/users-list.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  }
];
