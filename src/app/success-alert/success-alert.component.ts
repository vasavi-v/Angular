import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-success-alert',
  templateUrl:'./success-alert.component.html',
  styles: [`
  h3{
    color: green;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}`,`
  h4{
  color : blueviolet;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  `
]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
