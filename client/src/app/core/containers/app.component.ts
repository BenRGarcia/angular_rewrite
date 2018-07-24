import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      wrapper of app.component.ts
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
