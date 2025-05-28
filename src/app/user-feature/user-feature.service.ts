import { Inject, Injectable } from "@angular/core";
import { User } from "./user.module";


@Injectable({providedIn: 'root'}) // oppure standalone: true in Angular 17+
export class UserService {

  setUserData(data: User){

    console.log("in service user-feature");
    console.log(data);

    const annualData = [];
    let investmentValue = data.initInvestment;

    for(let i=0; i<data.duration; i++){
      const year = i+1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initInvestment;
      annualData.push({
        year : year,
        interest :interestEarnedInYear,
        valueEndOfYear :  investmentValue,
        annualInvestment : data.annualInvestment,
        totalInterest : totalInterest,
        totalAmountInvested : data.initInvestment + data.annualInvestment * year,
      });

      return annualData;
    }

  }
}
