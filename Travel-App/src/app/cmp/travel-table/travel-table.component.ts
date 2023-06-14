import { Component } from '@angular/core';

@Component({
  selector: 'app-traveling-table',
  templateUrl: './travel-table.component.html',
  styleUrls: ['./travel-table.component.scss']
})
export class TravelTableComponent {
  travels: any[] = [
    // Sample data, replace with your actual travel data
    { flagUrl: 'https://example.com/flag1.png', country: 'Country 1', startDate: new Date(), endDate: new Date(), notes: 'Notes 1' },
    { flagUrl: 'https://example.com/flag2.png', country: 'Country 2', startDate: new Date(), endDate: new Date(), notes: 'Notes 2' },
    // Add more travel items as needed
  ];

  deleteTravel(travel: any) {
    // Implement delete logic here, e.g., remove the travel item from the 'travels' array
    const index = this.travels.indexOf(travel);
    if (index !== -1) {
      this.travels.splice(index, 1);
    }
  }
}
