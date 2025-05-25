import { Component } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-user-feature',
  standalone: true,
  imports: [UserInputComponent],
  template: `
    <app-user-input></app-user-input>
  `,
  styleUrls: ['./user-feature.component.css']
})
export class UserFeatureComponent {}
