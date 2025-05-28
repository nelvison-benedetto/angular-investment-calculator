import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserFeatureComponent } from './user-feature';
import { InvestmentFeatureComponent } from './investment-feature/investment-feature.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserFeatureComponent, InvestmentFeatureComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  //add 's' + []!!
})
export class AppComponent {
  title = 'angular_investmentcalculator';
}
