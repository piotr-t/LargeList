import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
