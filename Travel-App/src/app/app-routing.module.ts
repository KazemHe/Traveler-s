import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelFormComponent } from './cmp/travel-form/travel-form.component';
import { TravelTableComponent } from './cmp/travel-table/travel-table.component';

const routes: Routes = [

{
  path : 'TravelForm' , component : TravelFormComponent , pathMatch : 'full'
} ,
{
  path : 'TravelTable' , component : TravelTableComponent , pathMatch : 'full'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
