import { TourComponent } from '../tour/tour.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToursRoutingModule } from './tours-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TourComponent,
        TourListComponent
    ],
    imports: [
        BrowserModule,
        ToursRoutingModule,
        FormsModule
    ]
})
export class ToursModule { }