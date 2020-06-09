import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  userIsAdmin = false;
  userId: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.userIsAdmin = this.authService.getIsAdmin();
    this.userId = this.authService.getUserId();
    console.log(this.userIsAdmin);
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

}
