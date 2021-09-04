import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator';
import { Organization } from 'src/app/models/organization';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public collaborator: Collaborator;
  public organization: Organization;
  private isRegisterComplete: boolean;
  private password_aux: string;
  public typeRegister: string;

  constructor(
    public _route: ActivatedRoute,
    public _router: Router,
    public _registerService: RegisterService
  ) { 
    this.collaborator = new Collaborator(0,'','','','','','',null,0,'','');
    this.organization = new Organization(0,'','','','','','',[],'',[]);
    this.isRegisterComplete = false;
    this.password_aux = '';
    this.typeRegister = 'collaborator';
  }

  ngOnInit(): void {
  }

}
