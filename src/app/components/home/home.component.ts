import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  imports: [RouterModule, MatButtonModule]
})
export class HomePageComponent {}
