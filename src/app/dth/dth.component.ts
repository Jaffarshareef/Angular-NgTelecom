import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-dth',
  templateUrl: './dth.component.html',
  styleUrls: ['./dth.component.css']
})
export class DthComponent implements OnInit {

  dthPlanList: any[];
  srchString: '';
  constructor(private service: PlanService) { }

  ngOnInit() {

    this.service.getAllDTHPlans().subscribe(
         resp => this.dthPlanList = resp,
            err => console.log(err));
  }



}
