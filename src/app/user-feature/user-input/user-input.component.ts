import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-feature.service';
import { User } from '../user.module';

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

  onSubmit(){
    const userData : User = {
      initInvestment: this.initInvestment ?? 0,
      annualInvestment: this.annualInvestment ?? 0,
      expectedReturn: this.expectedReturn ?? 0,
      duration: this.duration ?? 0
    };
    this.userService.setUserData(userData);
  }

}
