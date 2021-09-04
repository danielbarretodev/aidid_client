import { Injectable } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GLOBAL} from '../global';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(
    private http: HttpClient
  ) { }

  create(organization: Organization): Observable<any>{
    debugger
    let json = JSON.stringify(organization);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.post(GLOBAL.url+'/organization', params, {headers:headers});  
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
   
    return this.http.get(GLOBAL.url+'/organization', {headers:headers});  

  }
  get(idOrganization: number): Observable<any>{

    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
   
    return this.http.get(GLOBAL.url+'/organization/'+idOrganization, {headers:headers});  
  }


  update(organization: Organization){
    debugger
    let json = JSON.stringify(organization);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.put(GLOBAL.url+'/organization/'+organization.id, params, {headers:headers});  
  }

  delete(organization : Organization): Observable<any> {
    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.delete(GLOBAL.url+'/organization/'+organization.id, {headers:headers});  
  }
}
