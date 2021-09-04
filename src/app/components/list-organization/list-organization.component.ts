import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from 'src/app/models/organization';
import { LoginService } from 'src/app/services/login/login.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Membership } from 'src/app/models/membership';
import { MembershipService } from 'src/app/services/membership/membership.service';
import { MembershipDto } from 'src/app/models/membershipDto';
import { DonationService } from 'src/app/services/donation/donation.service';
import { DonationDto } from 'src/app/models/donationDto';
import { Donation } from 'src/app/models/donation';
import { Collaborator } from 'src/app/models/collaborator';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-list-organization',
  templateUrl: './list-organization.component.html',
  styleUrls: ['./list-organization.component.sass']
})
export class ListOrganizationComponent implements OnInit {
  public membership: Membership;
  public organizations: Array<Organization>;
  public nMembers: number;
  public nProjects: number;
  public organizationsWithParticipations: Map<number, boolean>;
  public index: number;
  public membershipDto: MembershipDto;
  public donationDto: DonationDto;
  public donation: Donation;
  form = new FormGroup({
    first: new FormControl('Nancy', Validators.minLength(2)),
    last: new FormControl('Drew'),
  });

  constructor(
    public _organizationService: OrganizationService,
    public _loginService: LoginService,
    public _route: ActivatedRoute,
    public _router: Router,
    public _membershipService: MembershipService,
    public _donationService: DonationService,
    public _alertService: AlertService
  ) {
    this.membership = new Membership(0, 0, 0, '', null, null, 0, 0, '');
    this.organizations = new Array();
    this.index = 0;
    this.membershipDto = new MembershipDto(null, 0, 0);
    this.donationDto = new DonationDto(null, 0, 0);
    this.donation = new Donation(0, 0, 0, '', new Date(), '', 0);
    this.nMembers = 0;
    this.nProjects = 0;
    this.organizationsWithParticipations = new Map;
  }

  ngOnInit(): void {
    this.getListOrg();
    debugger
  }

  getListOrg() {
    debugger;
    this._organizationService.getAll().subscribe(
      response => {
        debugger;
        let organizationsOther: Organization[] = response;
        let isMember = false;
        this.organizations = [];
        this.organizationsWithParticipations = new Map;
        organizationsOther.forEach(org => {
          org.memberships.forEach(mem => {
            debugger;
            if (mem.solidarityHistoryId == this._loginService.getCollaborator().solidarityHistory?.id) {
              this.organizationsWithParticipations.set(org.id, true);
              console.log(this.organizationsWithParticipations);
            }
          });
          this.organizations.push(org);
        });
      },
      error => {
        debugger;
        console.log(<any>error);
      }
    );
  }

  selectItem(organization: Organization, typeOption: string) {
    debugger;
    this.index = this.organizations.findIndex(p => p.id === organization.id);
    if (typeOption == 'membership') {
      this.membershipDto.idSolidarityHistory = this._loginService.getUser().solidarityHistory.id;
      this.membershipDto.idOrganization = organization.id;
      this.membershipDto.membership = this.membership;
      console.log(organization);
    } else if (typeOption == 'donation') {
      this.donationDto.idSolidarityHistory = this._loginService.getUser().solidarityHistory.id;
      this.donationDto.idOrganization = organization.id;
      this.donationDto.donation = this.donation;
    }
  }

  onSubmit() {
    debugger
    /*
    this._organizationService.update(this.organization).subscribe(
      response => {  
        debugger;
        this.getListOrg();
      },
      error => {
        debugger;
          console.log(<any>error);
      }
    );*/
    //   this.newOrganization = new Organization(0,'',new Date());

  }

  suscribe() {
    debugger
    this._membershipService.create(this.membershipDto).subscribe(
      response => {
        debugger;
        this.getListOrg();
        this._alertService.activateSuccessAlert();
      },
      error => {
        debugger;
        console.log(<any>error);
        this._alertService.activateErrorAlert();
      }
    );
    //   this.organization = new Organization(0,'',new Date()); 
  }

  donate() {
    debugger
    this._donationService.create(this.donationDto).subscribe(
      response => {
        debugger;
        this.getListOrg();
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
