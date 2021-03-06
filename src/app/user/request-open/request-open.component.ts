import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Postbox } from '../postbox.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-open',
  templateUrl: './request-open.component.html',
  styleUrls: ['./request-open.component.css']
})
export class RequestOpenComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;
  constructor(public authService: AuthService, public http: HttpClient, private router: Router){}

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
  addBox(form:NgForm){
    if(form.invalid){
      return;
    }
    this.isLoading = true;
    const postBoxData: Postbox = {id: null, qrCode: form.value.requestCode, requestForOpen: null, opened: null, heater: null, activationCode: null, owner: null};
    this.http.post<{message: string, postbox: Postbox}>("http://localhost:3000/api/delivaryMan/requestOpen", postBoxData).subscribe((dataResponse) => {
      console.log(dataResponse.message);
      this.router.navigate(['/']);
    })
    this.isLoading = false;
  }
}
