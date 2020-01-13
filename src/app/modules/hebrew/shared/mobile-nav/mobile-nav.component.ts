import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("document").ready(function(){
      $(".modal-content").css("overflow-y", "scroll");
      $(".modal-content").css("height", window.innerHeight);
     });
    }
  abc(){}
 
}
