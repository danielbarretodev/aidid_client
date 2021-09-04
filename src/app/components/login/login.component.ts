import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator';
import { Organization } from 'src/app/models/organization';
import { User } from 'src/app/models/user';
import { UserType } from 'src/app/models/user-type';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LoginService } from 'src/app/services/login/login.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public collaborator:Collaborator;
  public organization:Organization;
  public user: User;
  public token:string;
  public identity: any | undefined;

  constructor(
    public _route: ActivatedRoute,
    public _router: Router,
    public _registerService: RegisterService,
    public _loginService: LoginService,
    public _alertService: AlertService
  ) { 

    this.collaborator= new Collaborator(0,'','','','','','',null,0,'','');
    this.organization = new Organization(0,'','','','','','',[],'',[]);
    this.user = new User('','','','');
    this.token='';
  }

  ngOnInit(): void {
  
  }

  onSubmit(){
    debugger;
    //console.log(this.typeRegister);
    console.log(this.collaborator);
   // this.collaborator.password= this.password_aux;
    this._loginService.login(this.user).subscribe(
      response => {
        debugger;
        console.log(response);
        this._loginService.saveData(response);
        if(response.user.dtype.toUpperCase()==UserType[UserType.ORGANIZATION].toString())
        this._router.navigate(['admin-organization']);
        else this._router.navigate(['admin-collaborator']);
        this._alertService.activateSuccessAlert();
      },
      error => {
        debugger
          console.log(<any>error);
          this._alertService.activateErrorAlert();
          this.user.username='';
          this.user.password= '';
      }
    );
    
  }

  logout(){
    this._route.params.subscribe(params =>{
      debugger;
      let logout = +params['id'];
      if(logout==1){
        localStorage.removeItem('identity');
        this.identity=null;
        this._router.navigate(['home']);
      }
    })

    this._route.paramMap.subscribe(params => {
      debugger;
      let id = params.get('id');
    });
  }

}
