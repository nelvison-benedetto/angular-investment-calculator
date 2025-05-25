import { Component } from '@angular/core';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-investment-feature',
  standalone: true,
  imports: [InvestmentResultsComponent],
  template: `
    <app-investment-results></app-investment-results>
  `,
  styleUrls: ['./investment-feature.component.css']
})
export class InvestmentFeatureComponent {}
