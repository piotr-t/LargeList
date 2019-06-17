import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {

  constructor() { }

  @Input()
  item1;

  @Input()
  item2;

  

  ngOnInit() {

    this.item1 ="tstasa";
  }

}
