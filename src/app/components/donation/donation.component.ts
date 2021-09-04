import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/models/donation';
import { SolidarityHistory } from 'src/app/models/solidarity-history';
import { DonationService } from 'src/app/services/donation/donation.service';
import { LoginService } from 'src/app/services/login/login.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { SolidarityHistoryService } from 'src/app/services/solidarityHistory/solidarity-history.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.sass']
})
export class DonationComponent implements OnInit {

  public donations: Donation[];
  public solidarityHistory: SolidarityHistory;
  constructor(
    public _donationService: DonationService,
    public _solidarityHistoryService: SolidarityHistoryService,
    public _organizationService: OrganizationService,
    public _loginService: LoginService
  ) { 
    this.donations = [];
    this.solidarityHistory = new SolidarityHistory(0,[],[],[],0,'');
  }

  ngOnInit(): void {
    this.getDonationsList();
  }

  moreInfoDonation(donation: Donation) {
    this._solidarityHistoryService.get(donation.solidarityHistoryId).subscribe(
      response => {  
        debugger;
        this.solidarityHistory=response;
      },
      error => {
        debugger;
          console.log(<any>error);
      }
    );
  }

  getDonationsList()
  {
    this._organizationService.get(this._loginService.getOrganization().id).subscribe(
      response => {  
        debugger;
        this.donations=response.donations;
      },
      error => {
        debugger;
          console.log(<any>error);
      }
    );
  }

}
