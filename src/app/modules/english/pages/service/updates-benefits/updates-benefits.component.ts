import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates-benefits',
  templateUrl: './updates-benefits.component.html',
  styleUrls: ['./updates-benefits.component.css']
})
export class UpdatesBenefitsComponent implements OnInit {
  list: boolean = false ;
  grid: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  gridShow() {
    this.grid = true
    this.list = false;
    }
  listShow(){
    this.list = true;
    this.grid = false;
  }  
}
