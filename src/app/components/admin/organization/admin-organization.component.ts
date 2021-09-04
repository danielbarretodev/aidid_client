import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator';
import { Organization } from 'src/app/models/organization';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login/login.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-admin-organization',
  templateUrl: './admin-organization.component.html',
  styleUrls: ['./admin-organization.component.sass']
})
export class AdminOrganizationComponent implements OnInit {
  public collaborator: Collaborator;
  public organization: Organization;
  private isRegisterComplete: boolean;
  private password_aux: string;
  public typeRegister: string;
  public user: User | any;
 
    




  constructor(
    public _route: ActivatedRoute,
    public _router: Router,
    public _registerService: RegisterService,
    public _logginService: LoginService
  ) { 
    this.collaborator = new Collaborator(0,'','','','','','',null,0,'','');
    this.organization = new Organization(0,'','','','','','',[],'',[]);
    this.isRegisterComplete = false;
    this.password_aux = '';
    this.typeRegister = 'collaborator';
  }

  ngOnInit(): void {
    this.user=this._logginService.getUser();
  }

}
