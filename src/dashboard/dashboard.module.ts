import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './dashboard.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { SystemMessagesComponent } from './system-messages/system-messages.component';
import { SatellitesComponent } from './satellites/satellites.component';
import { ProfileComponent } from './profile/profile.component';
import { DevicesConnectedComponent } from './devices-connected/devices-connected.component';
import { DefineAndCommandDeviceComponent } from './define-and-command-device/define-and-command-device.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MenuBarComponent, ButtonBarComponent, SystemMessagesComponent, SatellitesComponent, ProfileComponent, DevicesConnectedComponent, DefineAndCommandDeviceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
