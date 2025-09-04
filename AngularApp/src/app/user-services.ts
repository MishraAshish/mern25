import { Injectable } from '@angular/core'; // injectable decorator makes the class available for dependency injection
import { HttpClient } from '@angular/common/http'; // HttpClient is imported to make HTTP calls
import { Observable } from 'rxjs'; // Observable is imported to handle asynchronous data streams

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  
  private apiUrl = 'http://localhost:9000/user/api/users'; // Example API endpoint

  constructor(private http: HttpClient) { }

  // Service methods will be implemented here
  getData() : string[] {
    return ['Data1', 'Data2', 'Data3'];
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Making a GET request to the API endpoint
  }
  
}
