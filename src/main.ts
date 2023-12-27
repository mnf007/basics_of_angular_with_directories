import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, // Remove this line
  imports: [
    CommonModule
  ],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <input type='text'
      class="form-control"
      (input)="details($event)" 
      
    >
    <button (click)='display()'>display details</button>
    <p *ngIf='history'>
    displaying details {{name}}
  </p>
    <a target="_blank" href="https://angular.dev/overview">
      <br> Learn more about Angular
    </a>
    <h2>History</h2>     
<ul *ngIf="history"> 
  <li *ngFor="let item of list">{{ item }}</li> 
</ul>
<p *ngIf="!history">There is no history<p> 
  `,
})
export class App {
  name = 'Angular';
  history: boolean = false;
  list:string[]=[]

  display() {
    this.history = true;
    this.list.push(this.name)
  }

  details(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}

bootstrapApplication(App);