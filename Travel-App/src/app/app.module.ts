import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app-root/app.component';
import { TravelFormComponent } from './cmp/travel-form/travel-form.component';
import { TravelTableComponent } from './cmp/travel-table/travel-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';






@NgModule({
  declarations: [
    AppComponent,
    TravelFormComponent,
    TravelTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,// Add FormsModule here
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule ,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatSortModule,
    AutocompleteLibModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
