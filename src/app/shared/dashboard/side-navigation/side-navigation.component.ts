import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import SIDE_NAV_ROUTE_LINKS from '../../../constants/side-nav-route-links';
import SideNavRouteLinkModel from '../../../models/dashboard/environments/side-nav-route-link.model';

@Component({
  selector: 'app-side-navigation',
  standalone: true,
  templateUrl: './side-navigation.component.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
})
export default class SideNavigationComponent {

  private readonly _sanitizer = inject(DomSanitizer);

  readonly links = SIDE_NAV_ROUTE_LINKS.map(l => ({
    ...l,
    icon: this._sanitizer.bypassSecurityTrustHtml(l.icon)
  }));
}