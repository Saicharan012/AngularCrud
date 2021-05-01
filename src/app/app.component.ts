import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularCodeChallenge';
  mobileList: any
  constructor() { }
  ngOnInit(): void {
  }
}
