import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../user-feature/user-feature.service';
import { ResultData } from '../result.module';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css'],
  encapsulation: ViewEncapsulation.Emulated // ✅ ABILITA SHADOW DOM
})
export class InvestmentResultsComponent {

  private userService = inject(UserService);

  //results : ResultData[] = this.userService.userData() ?? [];  //get an empty arr if userData is null
  results = computed(() => this.userService.userData() ?? []);  //update when userData changes!not only 1 at the start!
    //also possible use .asReadonly()
}
