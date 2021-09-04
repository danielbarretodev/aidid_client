import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GLOBAL} from '../global';
import {Observable} from 'rxjs';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  create(project: Project): Observable<any>{
    debugger
    let json = JSON.stringify(project);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.post(GLOBAL.url+'/project', params, {headers:headers});  
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
   
    return this.http.get(GLOBAL.url+'/project', {headers:headers});  

  }

  get(idProject: number){
    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.get(GLOBAL.url+'/project/' + idProject, {headers:headers});  
  }

  update(project: Project){
    debugger
    let json = JSON.stringify(project);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.put(GLOBAL.url+'/project/'+project.id, params, {headers:headers});  
  }

  delete(project : Project): Observable<any> {
    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
   
    return this.http.delete(GLOBAL.url+'/project/'+project.id, {headers:headers});  

  }
}
