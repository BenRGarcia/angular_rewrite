import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: string;

  constructor() {
    this.userData = 'loading...';
  }

  handleClick(): void {
    console.log(`User clicked button to retrieve user data`);
  }

  ngOnInit() {
  }

}
