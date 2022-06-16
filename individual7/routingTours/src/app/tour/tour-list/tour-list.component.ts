import { Component, OnInit } from '@angular/core';
import { TourDataService } from 'src/app/services/tour-data.service';
import {Tour} from 'src/app/services/tour-data.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {

  tours: Tour[] = [];
  selectedId: number = 0;

  constructor(private toursData: TourDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  selectTour(tourId:number){
    this.router.navigate(
      [tourId],
      {relativeTo: this.activatedRoute}
      );
      this.selectedId = tourId;
  }

  ngOnInit(): void {
    this.tours = this.toursData.getTours();
    this.selectedId = this.activatedRoute.snapshot.params['id'];
  }

}
