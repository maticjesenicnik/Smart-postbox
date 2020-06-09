import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { PostboxesComponent } from './user/postboxes/postboxes.component';
import { DeliveryLoginComponent } from './user/deliveryMan/login/login.component';

/* Visuals */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/* Authentications */
import { AuthInterceptor } from './auth/auth-interceptor';

/* HTTP */
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClosePostboxComponent } from './user/deliveryMan/close-postbox/close-postbox.component';
import { DeliverPackageComponent } from './user/deliveryMan/deliver-package/deliver-package.component';
import { RequestOpenComponent } from './user/deliveryMan/request-open/request-open.component';
import { NewPostboxComponent } from './user/new-postbox/new-postbox.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HeaderComponent,
    PostboxesComponent,
    ClosePostboxComponent,
    DeliverPackageComponent,
    RequestOpenComponent,
    DeliveryLoginComponent,
    NewPostboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
