import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Postbox } from '../postbox.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-postbox',
  templateUrl: './new-postbox.component.html',
  styleUrls: ['./new-postbox.component.css']
})
export class NewPostboxComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;
  private userId;
  constructor(public authService: AuthService, public http: HttpClient){}

  ngOnInit(){
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus =>{
        this.isLoading = false;
      }
    );
    this.userId = this.authService.getUserId();
  }
  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
  addBox(form:NgForm){
    if(form.invalid){
      return;
    }
    this.isLoading = true;
    const postBoxData: Postbox = {id: null, qrCode: null, requestForOpen: null, opened: null, heater: null, activationCode: form.value.activationCode, owner: this.userId};
    this.http.post<{message: string, postbox: Postbox}>("http://localhost:3000/api/postBox/add", postBoxData).subscribe((dataResponse) => {
      location.reload();
    })
    this.isLoading = false;
  }
}
