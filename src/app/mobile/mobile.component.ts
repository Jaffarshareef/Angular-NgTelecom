import { Component, OnInit } from '@angular/core';
import { MobilePlan } from '../mobile-plan';
import { PlanService } from '../plan.service';





@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  srchString: string;
  mobilePlanList: MobilePlan[];
  constructor(private service: PlanService) { }

  ngOnInit() {

    this.service.getAllMobilePlans().subscribe(
         resp => this.mobilePlanList = resp,
            err => console.log(err));
  }

}
