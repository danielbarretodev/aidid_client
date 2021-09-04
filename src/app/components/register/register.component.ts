import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {GLOBAL} from '../../services/global';
import { RegisterService } from 'src/app/services/register/register.service';
import { Organization } from 'src/app/models/organization';
import { RoleEnum } from 'src/app/models/roleEnum';
import { Collaborator } from 'src/app/models/collaborator';
import { NewUser } from 'src/app/models/newUser';
import { User } from 'src/app/models/user';
import { UserType } from 'src/app/models/user-type';
import { Role } from 'src/app/models/role';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  
  public collaborator: Collaborator;
  public organization: Organization;
  private isRegisterComplete: boolean;
  private password_aux: string;
  public myUserType: UserType;
  public userType = UserType;
  
  constructor(
    public _route: ActivatedRoute,
    public _router: Router,
    public _registerService: RegisterService,
    public _alertService: AlertService
  ) {
    this.collaborator = new Collaborator(0,'','','','','','',null,0,'','');
    this.organization = new Organization(0,'','','','','','',[],'',[]);
    this.isRegisterComplete = false;
    this.password_aux = '';
    this.myUserType= UserType.COLLABORATOR;
  }

  ngOnInit(): void {
  }
  onSubmit(){
    let user: User;
    if(this.myUserType==UserType.COLLABORATOR)
    {
      let role = new Role(0,RoleEnum[RoleEnum.COLLABORATOR].toString(),'');
      this.collaborator.role = RoleEnum[RoleEnum.COLLABORATOR];
      this.collaborator.type=UserType[this.myUserType].toString();

      this._registerService.register(this.collaborator).subscribe(
        response => {
          debugger
          console.log(response);
         // if(response.Register._id)
          //datos actualizados
         // this.Register = response.Register;
          this.isRegisterComplete = true;
          this._router.navigate(['login']);
         
          this._alertService.activateSuccessAlert();
        },
        error => {
          debugger;
          this.collaborator = new Collaborator(0,'','','','','','',null,0,'','');
          this._alertService.activateErrorAlert();
        }
        );    
    }   
    else {
     // let role = new Role(0,RoleEnum[RoleEnum.ORGANIZATION].toString(),'');
      this.organization.role = RoleEnum[RoleEnum.ORGANIZATION];
      this.organization.dtype=UserType[this.myUserType].toString();

      this._registerService.register(this.organization).subscribe(
        response => {
          debugger
          console.log(response);
         // if(response.Register._id)
          //datos actualizados
         // this.Register = response.Register;
          this.isRegisterComplete = true;
          this._router.navigate(['login']);
          this._alertService.activateSuccessAlert();
        },
        error => {
          debugger;
            console.log('holi');
            console.log(<any>error);
            this.organization = new Organization(0,'','','','','','',[],'',[]);
            this._alertService.activateErrorAlert();
        }
        );
  
 
    }

 

  
    
  }

  comprobateType():boolean {
      if(this.myUserType==UserType.COLLABORATOR)
        return true;

    return false;
  }
}
