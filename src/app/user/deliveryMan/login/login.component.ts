import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delivery-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class DeliveryLoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;
  constructor(public authService: AuthService){}

  ngOnInit(){
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus =>{
        this.isLoading = false;
      }
    );
  }
  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
  onLogin(form:NgForm){
    if(form.invalid){
      return;
    }
    this.isLoading = true;
    this.authService.deliveryLogin(form.value.username, form.value.password);
  }
}
