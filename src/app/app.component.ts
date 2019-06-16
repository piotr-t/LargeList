import { Component, OnInit } from '@angular/core';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  array = [];

  constructor() {

  }

  title = 'LargeList';



  ngOnInit() {
    for (let ix = 0; ix < 10000; ix++) {
let obj = {index: ix, id: uuid() };
      this.array.push(obj);
    }

  }
}
