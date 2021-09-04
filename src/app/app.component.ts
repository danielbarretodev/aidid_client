import { Component, DoCheck, OnInit } from '@angular/core';
import { AlertService } from './services/alert/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, DoCheck {
  
  title = 'app-ong-client';
  public isAlertSuccessActive:boolean;
  public isAlertErrorActive:boolean;

 
  constructor(
    public _alertService: AlertService
  ) { 
    this.isAlertErrorActive = false;
    this.isAlertSuccessActive = false;
  }
  ngOnInit(): void {
    this.isAlertErrorActive = this._alertService.isAlertErrorActive;
    this.isAlertSuccessActive = this._alertService.isAlertSuccessActive;
  }
  ngDoCheck(): void {
    this.isAlertErrorActive = this._alertService.isAlertErrorActive;
    this.isAlertSuccessActive = this._alertService.isAlertSuccessActive;
  }
}
  
