import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` <h2>{{ 'Welcome   ' + name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2>{{siteUrl}}</h2>`,
  styles: [],
})
export class TestComponent implements OnInit {
  //accessing global variable inside class due to unavailability in template
  public siteUrl = window.location.href;
  public name = 'Ayesha Areej';
  constructor() {}
  ngOnInit() {}
  greetUser() {
    return 'Hello  ' + this.name;
  }
}
