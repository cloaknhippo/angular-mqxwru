import { Component } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component';


@Component({
  selector: 'my-app',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class AppComponent  {
  name = '  General Dynamics  ';
  name2 = 'SATCOM Technologies';

}
