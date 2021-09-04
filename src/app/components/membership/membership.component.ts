import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Membership } from 'src/app/models/membership';
import { Organization } from 'src/app/models/organization';
import { SolidarityHistory } from 'src/app/models/solidarity-history';
import { LoginService } from 'src/app/services/login/login.service';
import { MembershipService } from 'src/app/services/membership/membership.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { SolidarityHistoryService } from 'src/app/services/solidarityHistory/solidarity-history.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.sass']
})
export class MembershipComponent implements OnInit {

  public membership: Membership;
  public memberships: Membership[];
  public solidarityHistory: SolidarityHistory;
  constructor(
    public _membershipService: MembershipService,
    public _organizationService: OrganizationService,
    public _solidarityHistoryService: SolidarityHistoryService,
    public _loginService: LoginService
  ) { 
    this.membership = new Membership(0,0,0,'',new Date(),new Date(),0,0,'');
    this.memberships = [];
    this.solidarityHistory = new SolidarityHistory(0,[],[],[],0,'');
  }

  ngOnInit(): void {
    this.getMembeshipList();
  }

  moreInfoMembership(membership: Membership) {
    this._solidarityHistoryService.get(membership.solidarityHistoryId).subscribe(
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

  getMembeshipList()
  {
    this._organizationService.get(this._loginService.getOrganization().id).subscribe(
      response => {  
        debugger;
        this.memberships=response.memberships;
      },
      error => {
        debugger;
          console.log(<any>error);
      }
    );
  }

}
