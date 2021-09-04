import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { LoginService } from 'src/app/services/login/login.service';
import { ProjectService } from 'src/app/services/project/project.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
import { RoleEnum } from 'src/app/models/roleEnum';
import { ProjectParticipation } from 'src/app/models/project-participation';
import { ProjectParticipationDto } from 'src/app/models/project-participationDto';
import { ProjectParticipationService } from 'src/app/services/projectParticipation/project-participation.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { UserType } from 'src/app/models/user-type';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.sass']
})
export class ListProjectComponent implements OnInit {

  public project: Project;
  public newProject: Project;
  public projects: Array<Project>; 
  public projectParticipationDto: ProjectParticipationDto;
  public projectParticipation: ProjectParticipation;
  public index: number;
  public identity: any;
  public isOrganization: Boolean;
  public projectWithParticipation: Map<number,boolean>;
  
  public isProjectSelected:boolean;
  constructor(
    public _projectService: ProjectService,
    public _loginService: LoginService,
    public _route: ActivatedRoute,
    public _router: Router,
    public _projectParticipationService: ProjectParticipationService,
    public _alertService: AlertService
  ) {
      this.project = new Project(0,'',new Date(),new Date(),'',0,'','',[]);
      this.newProject = new Project(0,'',new Date(),new Date(),'',0,'','',[]);
      this.projects = [];
      this.index=0;
      if(this._loginService.type==UserType.COLLABORATOR)
          this.identity=this._loginService.getCollaborator()
      else this.identity = this._loginService.getOrganization();
      this.isOrganization=false;
      this.projectParticipationDto = new ProjectParticipationDto(null,null,0);
      this.projectParticipation = new ProjectParticipation(0,'',new Date(),new Date(),0,0,this.identity.phone,this.identity.email);
      this.projectWithParticipation = new Map;
      this.isProjectSelected=false;
    }

  ngOnInit(): void {
    if(this.identity && this.identity.dtype=='Organization')
      this.isOrganization=true;
    this.getListProject();
  }

  getListProject(){
    debugger;
     this._projectService.getAll().subscribe(
      response => {
        debugger;
        let projectsOther: Project[] =response;
        this.projects = [];
        this.projectWithParticipation = new Map;
        projectsOther.forEach(project => {
          debugger
          project.projectParticipations.forEach(pp => {
              if(pp.solidarityHistoryId==this._loginService.getCollaborator().solidarityHistory?.id)
              {
                this.projectWithParticipation.set(project.id,true);
              }
          });
          debugger
          this.projects.push(project);
        });
      },
      error => {
        debugger;
          console.log(<any>error);
      }
    );
  }

  selectItem(project: Project,typeOption: string)
  {
    this.index = this.projects.findIndex(p => p.id === project.id);
    this.project.set(project);
    this.newProject.set(project);
    this.isProjectSelected=true;
    console.log(project);
    if(typeOption=='participation')
    {
      this.projectParticipationDto.idSolidarityHistory = this._loginService.getUser().solidarityHistory.id;
      this.projectParticipationDto.project = project;
      this.projectParticipationDto.projectParticipation = this.projectParticipation;
    }
  }

  onSubmit(){
    debugger
    this._projectService.update(this.newProject).subscribe(
      response => {  
        debugger;
        this.getListProject();
        this._alertService.activateSuccessAlert();
        
      },
      error => {
        debugger;
        console.log(<any>error);
        this._alertService.activateErrorAlert();
      }
    );
    this.newProject = new Project(0,'',new Date(),new Date(),'',0,'','',[]);
    this.isProjectSelected=false;
  }

  delete()
  {
    debugger
    this._projectService.delete(this.project).subscribe(
      response => {  
        debugger;
        this.getListProject();
        this._alertService.activateSuccessAlert();
      },
      error => {
        debugger;
          console.log(<any>error);
          this._alertService.activateErrorAlert();
      }
    );
    this.project = new Project(0,'',new Date(),new Date(),'',0,'','',[]); 
  }

  participate(){
    debugger
     this._projectParticipationService.create(this.projectParticipationDto).subscribe(
      response => {  
        debugger;
        this.getListProject();
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
