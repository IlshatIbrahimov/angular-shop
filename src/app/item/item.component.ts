import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CartService} from '../services/cart.service';
import {HeaderComponent} from '../header/header.component';

@Component({
  providers: [HeaderComponent],
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: any = {};
  count: number = 0;

  constructor(private modalService: NgbModal, private cart: CartService,
              private header: HeaderComponent) {
  }

  ngOnInit(): void {
    this.count = this.cart.getCount(this.item.id);
  }

  increaseCounter() {
    this.cart.addToCart(this.item, this.count + 1);
    this.count += 1;
  }

  decreaseCounter() {
    this.cart.removeFromCart(this.item, this.count - 1);
    this.count -= 1;
  }

  // @ts-ignore
  open(content, item) {
    this.item = item;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
