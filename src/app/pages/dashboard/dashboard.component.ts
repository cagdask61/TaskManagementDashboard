import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import SideNavigationComponent from '../../shared/dashboard/side-navigation/side-navigation.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styles: `
    :host {
      height: 100% !important;
      display: block !important;
    }
  `,
  imports: [
    RouterOutlet,
    SideNavigationComponent,
  ],
})
export default class DashboardComponent {

}
