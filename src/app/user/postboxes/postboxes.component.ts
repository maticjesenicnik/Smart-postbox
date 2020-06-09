import { Component, OnInit } from '@angular/core';
import { PostBox } from 'Backend/models/PostBox';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostboxService } from '../postboxes.service';
import { AuthData } from 'src/app/auth/auth-data.model';
import { Postbox } from '../postbox.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-postboxes',
  templateUrl: './postboxes.component.html',
  styleUrls: ['./postboxes.component.css']
})
export class PostboxesComponent implements OnInit {
  postBoxes: PostBox[] = [];
  userId: string;
  isLoading = false;
  totalPostboxes = 0;
  userIsAuthenticated = false;
  private postBoxesSub: Subscription;
  private authStatusSub: Subscription;

  constructor(private postboxesService: PostboxService, private authService: AuthService, private http: HttpClient, private router: Router){ }

  ngOnInit(){
    this.isLoading = true;
    this.userId = localStorage.getItem("userId");
    console.log(this.userId);
    this.postboxesService.getPostboxes(this.userId);
    this.postBoxesSub = this.postboxesService.getPostboxUpdateListener().subscribe((postboxData: {postboxes: PostBox[], postboxCount: number}) => {
      this.isLoading = false;
      this.totalPostboxes = postboxData.postboxCount;
      this.postBoxes = postboxData.postboxes;
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    })

  }

  openPostbox(id: string){
    const postBoxData: Postbox = {id: id, qrCode: null, requestForOpen: null, opened: null, heater: null, activationCode: null, owner: null};
    this.http.post<{message: string, modifiedPostBox: Postbox}>("http://localhost:3000/api/user/openPostBox", postBoxData).subscribe(() => {
      this.router.navigate(['/postboxes']);
    })
  }

  closeBox(qr: string){
    const postBoxData: Postbox = {id: null, qrCode: qr, requestForOpen: null, opened: null, heater: null, activationCode: null, owner: null};
    this.http.post<{message: string, modifiedPostBox: Postbox}>("http://localhost:3000/api/delivaryMan/closePostBox", postBoxData).subscribe(() => {
      this.router.navigate(['/postboxes']);
    })
  }

  heat(id: string, heating: boolean){
    if(heating){
      const postBoxData: Postbox = {id: id, qrCode: null, requestForOpen: null, opened: null, heater: null, activationCode: null, owner: null};
      this.http.post<{message: string, modifiedPostBox: Postbox}>("http://localhost:3000/api/postBox/turnHeaterOff", postBoxData).subscribe((responseData) => {
        console.log(responseData.modifiedPostBox.heater);
        this.router.navigate(['/postboxes']);
      })
    } else {
      const postBoxData: Postbox = {id: id, qrCode: null, requestForOpen: null, opened: null, heater: null, activationCode: null, owner: null};
      this.http.post<{message: string, modifiedPostBox: Postbox}>("http://localhost:3000/api/postBox/turnHeaterOn", postBoxData).subscribe((responseData) => {
        console.log(responseData.modifiedPostBox.heater);
        this.router.navigate(['/postboxes']);
      })
    }
    this.router.navigate(['/postboxes']);
  }

  displayedColumns: string[] = ['ID', 'QR Code', 'Open request', 'Opened', 'Heating', 'Activation Code' , 'ownerId', 'Close'];
}
