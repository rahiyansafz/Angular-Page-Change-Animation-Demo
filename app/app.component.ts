import { Component } from '@angular/core';

import { routerTransition } from './common/animations';
import { NavigationService } from './common/navigation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition(),
  ]
})
export class AppComponent {

  constructor(
    private navigationService: NavigationService
  ) {
  }

  getRouteAnimation(outlet) {
    return this.navigationService.animationValue;
  }
}
