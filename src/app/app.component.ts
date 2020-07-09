import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
   title = 'angular-simple-calculator';
   name: string;
   header: string;
   text: string[];
   result: string;
   url: string;
   constructor(){
      this.name = 'Mahesh';
      this.header = 'The Component with Binding DEMOS';
      this.url = "https://www.webnethelper.com";
   }

   display(evt:any): void {
     this.result = evt.target.value;
     this.text.push(evt.target.value);
   }

   clear(evt:any): void {
    this.result = '';
  }

  solve(evt:any): void {
    this.result = evt.target.value;
  }
}