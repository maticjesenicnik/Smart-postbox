import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { PostboxesComponent } from './user/postboxes/postboxes.component';
import { DeliveryLoginComponent } from './user/deliveryMan/login/login.component';
import { RequestOpenComponent } from './user/request-open/request-open.component';
import { ClosePostboxComponent } from './user/close-postbox/close-postbox.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'postboxes', component: PostboxesComponent, canActivate: [AuthGuard]},
  {path: 'request', component: RequestOpenComponent, canActivate: [AuthGuard]},
  {path: 'close', component: ClosePostboxComponent, canActivate: [AuthGuard]},
  {path: 'delivery_login', component: DeliveryLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
