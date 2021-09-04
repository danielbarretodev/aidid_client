import { Injectable, OnChanges, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public isAlertSuccessActive: boolean;
  public isAlertErrorActive: boolean;

  constructor() { 
    this.isAlertErrorActive = false;
    this.isAlertSuccessActive = false;
  }
  activateSuccessAlert() {
    this.isAlertSuccessActive = true;
    setTimeout(() => {
      debugger;
      this.isAlertSuccessActive = false;
    }, 2500);
    debugger;
  }

  activateErrorAlert() {
    this.isAlertErrorActive = true;
    setTimeout(() => {
      debugger;
      this.isAlertErrorActive = false;
    }, 2500);
    debugger;
  }
  
}
