export interface User {
  initInvestment: number; //if is 'number | null' null is a problem x output emit ect
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}
