import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor() { }

  @Input() items : any = {};
  @Input() name = "";

  ngOnInit(): void {
  }

}
