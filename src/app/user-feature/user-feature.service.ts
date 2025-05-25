import { Inject, Injectable } from "@angular/core";
import { User } from "./user.module";


@Injectable({providedIn: 'root'}) // oppure standalone: true in Angular 17+
export class UserService {

  setUserData(data: User){
    console.log("in service user-feature");
    console.log(data);

  }
}
