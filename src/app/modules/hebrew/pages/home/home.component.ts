import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $(document).ready(function(){
    $(window).scroll(function(){
      // $("#div2").css('opacity', 0);
      var center_width = $(window).width() / 2;
      var center_height = $(window).height() / 2;
      var scrollval= $(window).scrollTop();
  
      if(scrollval>=100){
        $(".hidesection").css('opacity',1);
        setTimeout(function(){
         $("#div2").show(1000)
         }, 1000);
      }
      else{
        $(".hidesection").css('opacity', 0)

      }
    })
    $("#div2").hide()
    $(".hidesection").css('opacity', 0)
      $(".box").hover(function(){
        $('.hide').fadeToggle();
      });
      $(".box1").hover(function(){
        $('.hide1').fadeToggle();
      });
      $(".box2").hover(function(){
        $('.hide2').fadeToggle();
      });
      $(".box3").hover(function(){
        $('.hide3').fadeToggle();
      });
      $(".box4").hover(function(){
        $('.hide4').fadeToggle();
      });
      $(".box5").hover(function(){
        $('.hide5').fadeToggle();
      });
    
      $(".box6").hover(function(){
        $('.hide6').fadeToggle();
       
      });
    });

  }
 
  abc(){
    console.log("Clicked");
  }
}
