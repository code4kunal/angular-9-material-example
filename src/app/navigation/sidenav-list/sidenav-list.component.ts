import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav  = new EventEmitter<void>();
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
  });
  }

  onClose(){
     this.closeSidenav.emit();
  }
  onLogout() {
    this.onClose();
    this.authService.logout();
  }

}
