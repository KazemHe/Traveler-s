import { Component, OnInit, ViewChild } from '@angular/core';
import { TravelService, travelService, Travel } from '../../services/travel.service';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-traveling-table',
  templateUrl: './travel-table.component.html',
  styleUrls: ['./travel-table.component.scss']
})
export class TravelTableComponent implements OnInit {
  travels: Travel[] = [];
  displayedColumns: string[] = ['flag', 'country', 'start', 'end', 'note', 'actions'];
  dataSource: MatTableDataSource<Travel> = new MatTableDataSource<Travel>();

  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private travelService: TravelService, private http: HttpClient) { }

  ngOnInit() {
    this.loadTravels();
  }


  async loadTravels() {
    try {
      const travels = await travelService.getTravels(null);
      this.travels = travels;
      this.dataSource.data = this.travels;
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    } catch (error) {
      console.error('Failed to load travels:', error);
    }
  }

  async deleteTravel(id: string) {
    try {
      await travelService.deleteTravel(id);
      // Refresh the table after successful deletion
      this.loadTravels();
    } catch (error) {
      console.error('Failed to delete travel:', error);
      // Handle the error if needed
    }
  }

  sortData(column: string) {
    if (this.sort) {
      this.sort.sort(({ id: column, start: 'asc' }) as MatSortable);
    }
  }
}
