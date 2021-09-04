import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from 'src/app/models/organization';
import { Project } from 'src/app/models/project';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { ListProjectComponent } from '../list-project/list-project.component';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.sass']
})
export class CreateProjectComponent implements OnInit {

  public project: Project;

  constructor(
    public _projectService: ProjectService,
    public _loginService: LoginService,
    public _route: ActivatedRoute,
    public _router: Router,
    public _alertService: AlertService
  ) {   
    this.project = new Project(0,'',new Date(),new Date(),'',0,'','',[]);
   }

  ngOnInit(): void {
   
  }

  onSubmit(){
    //console.log(this.typeRegister);
    debugger;
    let user = this._loginService.getUser();
    this.project.organizationId=user.id;
    this.project.organizationUserName=user.username;
    console.log(this.project);
    this._projectService.create(this.project).subscribe(
      response => {  
        this._router.navigate(['admin-organization']);
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
