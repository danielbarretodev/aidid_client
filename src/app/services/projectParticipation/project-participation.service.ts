import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GLOBAL} from '../global';
import {Observable} from 'rxjs';
import { ProjectParticipationDto } from 'src/app/models/project-participationDto';
import { ProjectParticipation } from 'src/app/models/project-participation';

@Injectable({
  providedIn: 'root'
})
export class ProjectParticipationService {

  constructor(
    private http: HttpClient
  ) { }

  create(projectParticipationDto: ProjectParticipationDto): Observable<any>{
    debugger
    let json = JSON.stringify(projectParticipationDto);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.post(GLOBAL.url+'/projectParticipation', params, {headers:headers});  
  }

  getAll(): Observable<any> {
    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
   
    return this.http.get(GLOBAL.url+'/projectParticipation', {headers:headers});
  }

  update(projectParticipation: ProjectParticipation){
    debugger
    let json = JSON.stringify(projectParticipation);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.put(GLOBAL.url+'/projectParticipation/'+projectParticipation.id, params, {headers:headers});  
  }

  delete(projectParticipation : ProjectParticipation): Observable<any> {
    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
   
    return this.http.delete(GLOBAL.url+'/projectParticipation/'+projectParticipation.id, {headers:headers});
  }
}