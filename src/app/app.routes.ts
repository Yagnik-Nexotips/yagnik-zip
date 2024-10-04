import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BrowseCarsComponent } from './pages/browse-cars/browse-cars.component';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './login-pages/login/login.component';
import { RegistrationComponent } from './login-pages/registration/registration.component';
import { ManageCarsComponent } from './admin/manage-cars/manage-cars.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CommanPageComponent } from './componts/comman-page/comman-page.component';
import { BookTestDriveComponent } from './componts/book-test-drive/book-test-drive.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'services', component: ServiceComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: 'browse-cars', component: BrowseCarsComponent },
      { path: '', pathMatch: 'full', redirectTo: '/home' },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ],
  },
  { path: 'car-details/:id', component: CommanPageComponent }, // Car details page with a dynamic ID
  { path: 'book-testdrive', component: BookTestDriveComponent }, // Book test page
  { path: 'oders', component: ManageOrdersComponent }, // oders manage page

  {
    path: 'admin',
    component: DashboardComponent,
  },
  // loadChildren: () =>
  // import('./admin/admin.module').then((m) => m.AdminModule),
  { path: 'manage-cars', component: ManageCarsComponent },
  { path: 'manage-user', component: ManageUsersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
