import { Component, OnInit } from '@angular/core';
import { travelService } from '../../services/travel.service';

@Component({
  selector: 'app-traveling-table',
  templateUrl: './travel-table.component.html',
  styleUrls: ['./travel-table.component.scss']
})
export class TravelTableComponent implements OnInit {
  travels: any[] = [];

  ngOnInit() {
    this.loadTravels();
  }

  loadTravels() {
    try {
      travelService.getTravels(null)
        .then((travels) => {
          this.travels = travels;
        })
        .catch((error) => {
          console.error('Failed to load travels:', error);
          // Handle the error if needed
        });
    } catch (error) {
      console.error('Failed to load travels:', error);
      // Handle the error if needed
    }
  }

  deleteTravel(travel: any) {
    try {
      travelService.deleteTravel(travel._id)
        .then(() => {
          const index = this.travels.findIndex((t) => t._id === travel._id);
          if (index !== -1) {
            this.travels.splice(index, 1);
          }
        })
        .catch((error) => {
          console.error('Failed to delete travel:', error);
          // Handle the error if needed
        });
    } catch (error) {
      console.error('Failed to delete travel:', error);
      // Handle the error if needed
    }
  }
}
