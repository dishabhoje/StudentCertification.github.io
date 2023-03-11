import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'loginsuccess' ,component:LoginsuccessComponent},
  {path:'registeration' ,component:RegisterationComponent},
  {path:'dashboardSuccess',component:DashboardComponent},
  {path:'homepage',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
