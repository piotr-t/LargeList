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

  title = 'Records list:';



  ngOnInit() {
    for (let ix = 1; ix < 14001; ix++) {
const obj = {index: ix, id: uuid() };
      this.array.push(obj);
    }

  }
}
