import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#div1").hide();
      setTimeout(function(){
        $("#div1").show(500)}, 
        3000);
    });
  }


}
