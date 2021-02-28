// @ts-nocheck
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  name = '';
  surname = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {
  }

  checkIfItemInCart() {

  }

  addToCart(item, count) {
    let cart = JSON.parse(localStorage.getItem('CART') as string || '{}');
    item.count = count;
    cart[item.id] = item;
    localStorage.setItem('CART', JSON.stringify(cart));
  }

  removeFromCart(item, count) {
    let cart = JSON.parse(localStorage.getItem('CART') as string || '{}');
    if (count === 0) {
      delete cart[item.id]
      localStorage.setItem('CART', JSON.stringify(cart));
      return;
    }
    item.count = count;
    cart[item.id] = item;
    localStorage.setItem('CART', JSON.stringify(cart));
  }

  getCount(id) {
    let cart = JSON.parse(localStorage.getItem('CART') as string || '{}');
    if (!cart.hasOwnProperty(id)) {
      return 0;
    }
    return cart[id].count;
  }
}
