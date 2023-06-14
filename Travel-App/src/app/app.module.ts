import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app-root/app.component';
import { TravelFormComponent } from './cmp/travel-form/travel-form.component';
import { TravelTableComponent } from './cmp/travel-table/travel-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelFormComponent,
    TravelTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
