import { Injectable } from '@angular/core'; // injectable decorator makes the class available for dependency injection

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  
  constructor() { }

  // Service methods will be implemented here
  getData() : string[] {
    return ['Data1', 'Data2', 'Data3'];
  }
}
