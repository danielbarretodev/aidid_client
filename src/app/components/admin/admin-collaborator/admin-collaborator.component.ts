import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-admin-collaborator',
  templateUrl: './admin-collaborator.component.html',
  styleUrls: ['./admin-collaborator.component.sass']
})
export class AdminCollaboratorComponent implements OnInit {

  public user: User | any;
  constructor(
    public _logginService: LoginService
  ) { }

  ngOnInit(): void {
    this.user=this._logginService.getUser();
  }

}
