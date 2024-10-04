import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ManageCarsComponent } from '../manage-cars/manage-cars.component';
import { ManageUsersComponent } from '../manage-users/manage-users.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, ManageCarsComponent, ManageUsersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
