import {Component, OnInit} from '@angular/core';
import {MenuService} from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  groups: [] | any = null;

  constructor(private menu: MenuService) {
  }

  async ngOnInit(): Promise<void> {
    // @ts-ignore
    this.groups = await this.menu.getMenu().toPromise().then((data) => {
      // @ts-ignore
      return data;
    });
    // @ts-ignore
    console.log(this.groups);
  }
}

