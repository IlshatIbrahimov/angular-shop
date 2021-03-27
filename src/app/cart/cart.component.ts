import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProfileGuard} from '../guard/profile-guard';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: any = {};
  name: any = '';

  constructor(
    public cart: CartService,
    public profileGuard: ProfileGuard,
    private modalService: NgbModal,
    private router: Router) {
  }


  ngOnInit(): void {
    this.cart.cartSource.subscribe(items => this.items = items);
    this.items = JSON.parse(localStorage.getItem('CART') as string || '{}');
  }

  // @ts-ignore
  open(content) {

    if (!this.profileGuard.canActivate()) {
      return;
    }

    this.name = localStorage.getItem('NAME');
    let modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    localStorage.removeItem('CART');
    this.router.navigate(['/']);
  }
}
