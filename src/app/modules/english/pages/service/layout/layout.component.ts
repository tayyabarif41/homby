import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() {
  
   }

 
   ngOnInit() {
    var hidden = $('.hidden');
    $(document).ready(function(){

      setTimeout(function(){hidden.animate({"left":"0px"}, 2000).addClass('visible')},3000);
      setTimeout(function(){  hidden.animate({"left":"-1000px"}, 2000).removeClass('visible'); }, 8000);

      $('.hidden').css('top',$('.leftNav').css('top'));
      // $('.hidden').css('height',$('.leftNav').css('height'));

      
      $('.slide1').click(function(){
      console.log(hidden.hasClass('visible'));
      if (hidden.hasClass('visible')){
          hidden.animate({"left":"-1000px"}, "slow").removeClass('visible'); 
      }
      else {
          hidden.animate({"left":"0px"}, "slow").addClass('visible');
          if(hidden.hasClass('visible')){
           console.log("Visible Else")
          }
      }
      
     });
     $('#pageRoute').click(function(){
      console.log(hidden.hasClass('visible'));
      if (hidden.hasClass('visible')){
          hidden.animate({"left":"-1000px"}, "slow").removeClass('visible'); 
      }
      
     });

    });
    
  }
  abc(){
    console.log("Clicked");
  
  }

}
