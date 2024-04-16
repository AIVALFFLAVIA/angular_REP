import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): void {
    const loginData = { username, password };
    this.http.post<any>('https://localhost:7006', loginData).subscribe(
      (response) => {
        console.log(response); // Handle the response data (e.g., store token in localStorage)
        // Redirect the user to another page upon successful login
        this.router.navigate(['/dashboard']); // Change '/dashboard' to the desired route
      },
      (error) => {
        console.error(error); // Handle errors (e.g., display error message)
      }
    );
  }
}
