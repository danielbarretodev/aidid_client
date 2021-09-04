import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum } from 'src/app/models/roleEnum';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, DoCheck {
  
  
  public identity:any;
  
  
  constructor(
    private _loginService: LoginService,
    public _router: Router
  ){
    this.identity = this._loginService.getUser();
   // this.token = this.identity.token;
  }
  ngDoCheck(): void {
    this.identity = this._loginService.getUser();
  }

  ngOnInit(): void {
   
  }

  logout(){
    this._loginService.removeData();
    this._router.navigate(['login']);
  }

  adminLink(){
    if(this.identity.dtype.toUpperCase()==RoleEnum[RoleEnum.COLLABORATOR])
      this._router.navigate(['admin-collaborator']);
    else this._router.navigate(['admin-organization']);
  }


}
