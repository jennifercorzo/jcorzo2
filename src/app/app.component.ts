import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void{
  }
  
  openCity(evt, cityName) {
    var i, tabcontent, tablinks, city;
    tabcontent = document.getElementsByClassName("tabcontent");
    city = document.getElementById(cityName) as HTMLInputElement;
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    city.style.display = "block";
    evt.currentTarget.className += " active";
  }

  testing(cityName, callingBtn){
    console.log("testing funct");
    var i, tabcontent, tablinks, city, caller;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      city = document.getElementById(cityName) as HTMLInputElement; 
      caller = document.getElementById(callingBtn) as HTMLInputElement; 
      city.style.display = "block";
      caller.className += " active";
     // evt.currentTarget.className += " active";
  }

  
}