import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-feature.service';
import type { User } from '../user.module';  //'type' so the import doesnt produce codes(in js file at runtime)!! X STATIC IMPORTS(also x static COMPONENTS!!). User is an interface
import type { ResultData } from '../../investment-feature/result.module';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  initInvestment = null;
  annualInvestment = null;
  expectedReturn = null;
  duration = null;

  private userService = inject(UserService);

  calculate = output<User>();

  onSubmit(){
    const userData : User = {
      initInvestment: this.initInvestment ?? 0,
      annualInvestment: this.annualInvestment ?? 0,
      expectedReturn: this.expectedReturn ?? 0,
      duration: this.duration ?? 0
    };
    const results : ResultData[] = this.userService.oncalculateInvestmentResults(userData);
    this.userService.userData.set(results);
      //to use in the target:  const user = this.userService.userData();

    console.log(this.userService.userData());  //read value userData() in user-feature.service.ts

    this.calculate.emit(userData); //only x education, i use instead shared service
  }

}
