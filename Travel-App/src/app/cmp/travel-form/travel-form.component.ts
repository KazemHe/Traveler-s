import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Travel, TravelService,travelService, Country } from '../../services/travel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss'],
})
export class TravelFormComponent implements OnInit {
  country: string = '';
  countryControl = new FormControl();
  startDate: string = '';
  endDate: string = '';
  notes: string = '';
  countries: Country[] = [];

  constructor(
    private travelService: TravelService,
    private router: Router
  ) {}

  searchCountries() {
    const inputValue = this.countryControl.value;

    if (inputValue && inputValue.length > 2) {
      this.travelService.getCountries(inputValue).subscribe((countries: Country[]) => {
        this.countries = countries.map((country: any) => country.name.common);
        console.log(countries);
      });
      
    }
  }

  async submitForm() {
    const travelInfo: Travel = {
      _id: '', // Assign an appropriate ID here
      country: this.countryControl.value, // Use the value from the form control instead of the separate country variable
      start: this.startDate.toString(),
      end: this.endDate.toString(),
      note: this.notes,
    };

    try {
      const savedTravel = await travelService.saveTravel(travelInfo);
      console.log('Travel saved:', savedTravel);
      this.router.navigate(['/TravelTable']);

      // Add any additional logic after saving the travel
    } catch (error) {
      console.error('Failed to save travel:', error);
      // Handle the error if needed
    }
  }

  ngOnInit() {
    this.searchCountries();
  }
}
