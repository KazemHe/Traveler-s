import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Travel, travelService } from '../../services/travel.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

interface Country {
  name: string;
}

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss'],
  animations: [
    {
      name: '@panelAnimation',
      definitions: [
        {
          type: 'style',
          fromStyles: { opacity: 0 },
          toStyles: { opacity: 1 },
          duration: 500,
        },
      ],
    },
  ],
})
export class TravelFormComponent implements OnInit {
  country: string = '';
  countryControl = new FormControl();
  startDate: string = '';
  endDate: string = '';
  notes: string = '';
  countries: Country[] = [];

  constructor(private http: HttpClient) {}

  searchCountries() {
    const inputValue = this.countryControl.value;

    if (inputValue && inputValue.length > 2) {
      this.getCountries(inputValue).subscribe((countries) => {
        this.countries = countries;
      });
    }
  }

  getCountries(searchTerm: string): Observable<Country[]> {
    return this.http
      .get<any[]>(`https://restcountries.com/v3/name/${searchTerm}`)
      .pipe(map((response) => response.map((country) => ({ name: country.name.common }))));
  }

  async submitForm() {
    const travelInfo: Travel = {
      _id: '', // Assign an appropriate ID here
      country: this.country,
      start: this.startDate.toString(),
      end: this.endDate.toString(),
      note: this.notes,
    };

    try {
      const savedTravel = await travelService.saveTravel(travelInfo);
      console.log('Travel saved:', savedTravel);
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
