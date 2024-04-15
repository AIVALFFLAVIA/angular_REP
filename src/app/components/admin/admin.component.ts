import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] 
})
export class AdminComponent {

  constructor(private router: Router) { }

  navigateToPropertyManagement(): void {
    this.router.navigate(['/property-management']);
  }

  navigateToUserManagement(): void {
    this.router.navigate(['/user-management']);
  }
}
