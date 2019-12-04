import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './dashboard.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MenuBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
