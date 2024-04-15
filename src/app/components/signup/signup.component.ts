import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  cities: string[] = [];

  onCountryChange(event: any) {
    const country = event.target.value;
    if (country === 'Albania') {
      this.cities = ['Tirana', 'Durrës', 'Vlorë', 'Shkodër', 'Fier'];
    } else if (country === 'Kosovo') {
      this.cities = ['Pristina', 'Prizren', 'Peja', 'Gjakova', 'Mitrovica'];
    } else {
      this.cities = [];
    }
  }
}
