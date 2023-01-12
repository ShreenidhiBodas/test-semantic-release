import { Component } from '@angular/core';

@Component({
  selector: 'lib-components',
  template: `
    <p>
      components works!
      {{ title }}
    </p>
  `,
  styles: [
  ]
})
export class ComponentsComponent {
  title: string = 'Test Semantic release';
}
