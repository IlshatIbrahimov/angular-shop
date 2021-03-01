// @ts-nocheck
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  public countSource = new BehaviorSubject<number>(this.getSize());
  public cartSource = new BehaviorSubject<number>(localStorage.getItem('CART'));

  addToCart(item, count) {
    let cart = JSON.parse(localStorage.getItem('CART') as string || '{}');
    item.count = count;
    cart[item.id] = item;
    localStorage.setItem('CART', JSON.stringify(cart));
    this.countSource.next(this.getSize());
    this.cartSource.next(cart)
  }

  removeFromCart(item, count) {
    let cart = JSON.parse(localStorage.getItem('CART') as string || '{}');
    if (count === 0) {
      delete cart[item.id];
      localStorage.setItem('CART', JSON.stringify(cart));
      this.countSource.next(this.getSize());
      this.cartSource.next(cart)
      return;
    }
    item.count = count;
    cart[item.id] = item;
    localStorage.setItem('CART', JSON.stringify(cart));
    this.cartSource.next(cart)
  }

  getCount(id) {
    let cart = JSON.parse(localStorage.getItem('CART') as string || '{}');
    if (!cart.hasOwnProperty(id)) {
      return 0;
    }
    return cart[id].count;
  }

  getSize() {
    let cart = JSON.parse(localStorage.getItem('CART') as string || '{}');
    return Object.keys(cart).length;
  }
}
