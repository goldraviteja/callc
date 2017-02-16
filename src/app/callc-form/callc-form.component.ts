import { Component, OnInit } from '@angular/core';
import { CallcForm }    from './callcForm';

@Component({
  moduleId: module.id,
  selector: 'callc-form',
  templateUrl: './callc-form.component.html',
  styleUrls: ['./callc-form.component.css']
})

export class CallcFormComponent implements OnInit {

  constructor() { }

  searchCriteria =  ['ATN', 'WTN', 'USOC'];
  sortByValues = ['ATN,USOC', 'USOC,WTN'];
  monthList = [1,2,3,4,5,6,7,8,9,10,11,12];
  yearList = [2017,2016,2015,2014,2013,2012];
  isSearchByATN = false;
  isSearchByUSOC = false;

  model = new CallcForm(1, 2017, '', '', '','');

  submitted = false;
  onSubmit() { this.submitted = true; }

  onSelectSearchBy(searchBySelectValue : String) : void {
      
    this.isSearchByATN = false;
    this.isSearchByUSOC = false;
  	if(searchBySelectValue === "ATN") {
      this.isSearchByATN = true;
    }
    if(searchBySelectValue === "USOC") {
      this.isSearchByUSOC = true;
    }
  }

  ngOnInit() {
  }

}
