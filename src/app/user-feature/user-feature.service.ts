import { Inject, Injectable, signal } from "@angular/core";
import { User } from "./user.module";
import { ResultData } from "../investment-feature/result.module";

@Injectable({providedIn: 'root'}) // x new use also: this standaalone:true in .ts, and in target use   userService = inject(UserService);
export class UserService {

  userData = signal<ResultData[] | null>(null);  //BEST METHOD W signal: now you can inject UserService and access to userData anywhere you are!
    //private userService = inject(UserService);
    //to set userData:      this.userService.userData.set(userData);
    //to get userData:      const user = this.userService.userData();


  oncalculateInvestmentResults(data:User
  //   {  //already defined in User
  //   initInvestment: number,
  //   duration: number,
  //   annualInvestment: number,
  //   expectedReturn: number
  // }
  ) : ResultData[] {
      const {initInvestment, duration, annualInvestment, expectedReturn} = data;

      const annualData = [];
      let investmentValue = data.initInvestment;

      for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear =
          investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
          investmentValue - annualInvestment * year - initInvestment;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: data.annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested:
            initInvestment + annualInvestment * year,
        });
      }
      return annualData;
  }

}
