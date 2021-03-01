import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ProfileGuard} from '../guard/profile-guard';
import {CartService} from '../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private loginGuard: ProfileGuard,
    private cart: CartService,
    public router: Router
  ) {
  }


  ngOnInit(): void {
    this.cart.countSource.subscribe((size) => this.size = size);
  }

  name = '';
  isProfilePageVisible = false;
  size = 0;

  onProfileClick() {
    if (!this.isProfilePageVisible && !this.loginGuard.canActivate()) {
      return;
    }
    this.name = localStorage.getItem('NAME') || '';
    this.isProfilePageVisible = !this.isProfilePageVisible;
  }

  logout() {
    this.authService.logout();
    this.isProfilePageVisible = false;
  }
}
