import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss']
})
export class TravelFormComponent {
  country: string | any ;
  countryControl = new FormControl();
  startDate: Date = new Date();
  endDate: Date = new Date();
  notes: string = '';
  

  countries: string[] = [
    'Country 1',
    'Country 2',
    'Country 3',
    // Add more country options as needed
  ];

  submitForm() {
    const travelInfo = {
      country: this.countryControl.value,
      startDate: this.startDate,
      endDate: this.endDate,
      notes: this.notes
    };

    // Add logic to handle form submission
    // e.g., push the travel information to the Traveling Table
    console.log(travelInfo);
  }
}
