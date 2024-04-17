import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {

  constructor() { }

  onSubmit(form: any) {
    const selectedDate = new Date(form.reservationDate);
    const selectedDay = selectedDate.getDay();
    const errorMessageElement = document.getElementById('errorMessage');

    if (errorMessageElement) {
      if (selectedDay === 0 || this.isHoliday(selectedDate)) {
        errorMessageElement.textContent = 'Reservations are not allowed on Sundays or official holidays.';
      } else {
        errorMessageElement.textContent = '';
        // Proceed with reservation process
        alert('Reservation successful!');
      }
    }
  }

  isHoliday(date: Date): boolean {
    // Placeholder for holiday checking logic
    // For demonstration, assume holidays are 25th December and 1st January
    const christmas = new Date(date.getFullYear(), 11, 25);
    const newYear = new Date(date.getFullYear() + 1, 0, 1);

    return date.getTime() === christmas.getTime() || date.getTime() === newYear.getTime();
  }
}
