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
  total: any = 0;

  constructor(
    private cart: CartService,
    public profileGuard: ProfileGuard,
    private modalService: NgbModal,
    private router: Router) {
  }


  ngOnInit(): void {
    this.cart.cartSource.subscribe(items => this.items = items);
    this.items = JSON.parse(localStorage.getItem('CART') as string || '{}');
    this.total = this.cart.getSize();
  }

  getPrice() {
    let result = 0;
    for (const [key, value] of Object.entries(this.items)) {
      // @ts-ignore
      result += value.count * value.price;
    }
    return result;
  }

  // @ts-ignore
  open(content) {

    if (!this.profileGuard.canActivate()) {
      return;
    }

    this.name = localStorage.getItem('NAME');
    let modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    modalReference.result.then((result) => {
    }, (reason) => {
      this.router.navigate(['/menu']);
    });

  }
}
