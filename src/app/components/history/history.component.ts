import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/models/donation';
import { Membership } from 'src/app/models/membership';
import { Project } from 'src/app/models/project';
import { ProjectParticipation } from 'src/app/models/project-participation';
import { SolidarityHistory } from 'src/app/models/solidarity-history';
import { AlertService } from 'src/app/services/alert/alert.service';
import { DonationService } from 'src/app/services/donation/donation.service';
import { LoginService } from 'src/app/services/login/login.service';
import { MembershipService } from 'src/app/services/membership/membership.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { ProjectParticipationService } from 'src/app/services/projectParticipation/project-participation.service';
import { SolidarityHistoryService } from 'src/app/services/solidarityHistory/solidarity-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  public solidarityHistory: SolidarityHistory | null;
  public membership: Membership | any;
  public projectParticipation: ProjectParticipation | any;
  public donation: Donation | any;
  public project: Project | any;
  public loading: boolean;

  constructor(
    public _solidarityHistoryService: SolidarityHistoryService,
    public _membershipService: MembershipService,
    public _donationService: DonationService,
    public _projectParticipationService: ProjectParticipationService,
    public _logginService: LoginService,
    public _projectService: ProjectService,
    public _alertService: AlertService
  ) {
    this.solidarityHistory = null;
    this.project = null;
    this.loading = false;
  }

  ngOnInit(): void {
    debugger
    this.getSolidarityHistory();
  }

  selectMembership(membership: Membership)
  {
    debugger
    this.membership = membership;
  }

  selectDonation(donation: Donation)
  {
    this.donation = donation;  
  }

  selectProjectParticipation(projectParticipation: ProjectParticipation)
  {
    debugger
    this.projectParticipation = projectParticipation;
  }

  moreInfoProjectParticipation(projectParticipation: ProjectParticipation)
  {
    this.projectParticipation = projectParticipation;
    this.loading = true;
    this._projectService.get(this.projectParticipation.projectId).subscribe(
      response => {  
        debugger;
        this.project = response;
        this.loading=false;
      },
      error => {
        console.log(<any>error);
      }
    );
  }


  getSolidarityHistory(){
    debugger;
    this._solidarityHistoryService.get(this._logginService.getUser().solidarityHistory.id).subscribe(
      response => {  
        debugger;
       
        this.solidarityHistory=response;
        this.membership = response.memberships;
      },
      error => {
        debugger;
          console.log(<any>error);
      }
    );
  }

  cancelationMembership(){
    debugger
    this._membershipService.delete(this.membership).subscribe(
      response => {  
        debugger;
        this.getSolidarityHistory();
        this._alertService.activateSuccessAlert();
      },
      error => {
        debugger;
          console.log(<any>error);
          this._alertService.activateErrorAlert();
      }
    );
  }

  deleteProjectParticipation(){
    this._projectParticipationService.delete(this.projectParticipation).subscribe(
      response => {  
        debugger;
        this.getSolidarityHistory();
        this._alertService.activateSuccessAlert();
      },
      error => {
        debugger;
          console.log(<any>error);
          this._alertService.activateErrorAlert();
      }
    );
    
  }
}