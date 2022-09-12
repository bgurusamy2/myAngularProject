import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myAngularProject';
  ngOnInit(){
    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);
  
   function disableF5(e: any) {
      if ((e.which || e.keyCode) == 116) e.preventDefault(); 
   };
 }
}
