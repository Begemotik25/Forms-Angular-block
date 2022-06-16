import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourDataService } from '../services/tour-data.service';
import { Tour } from '../services/tour-data.service';

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.scss']
})
export class TourEditComponent implements OnInit {

  editTour: Tour = {
    id: 0,
    name: "",
    country: "",
    cost: 0,
    days: 0
  };

  constructor(private tourDataService: TourDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const tourId = this.activatedRoute.snapshot.params['id'];

    const reg = this.tourDataService.getTour(tourId);
    if(reg){
      this.editTour.id = reg.id;
      this.editTour.name = reg.name;
      this.editTour.country = reg.country;
      this.editTour.cost = reg.cost;
      this.editTour.days = reg.days;
    }
  }
  formSubmit(form:any) {
    const reg = this.tourDataService.getTour(
      this.editTour.id
    );
    if(reg){
      reg.name = form.name;
      reg.country = form.country;
      reg.cost = form.cost;
      reg.days = form.days;
    }
  }

}
