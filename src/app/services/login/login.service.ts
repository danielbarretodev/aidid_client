import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from '../global';
import {Observable} from 'rxjs';
import { Collaborator } from 'src/app/models/collaborator';
import { Organization } from 'src/app/models/organization';
import { UserType } from 'src/app/models/user-type';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public  url: string;
  public type: UserType;


  constructor(
    private http: HttpClient
  ){
    this.url = GLOBAL.url;
    this.type=UserType.ORGANIZATION;
  }

  login(user: any): Observable<any>{
    debugger;
    let json = JSON.stringify(user);
    let params = json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url+'/auth/login', params, {headers:headers});
  }

  saveData(response: any){
    debugger
    localStorage.setItem('user',JSON.stringify(response.user));     
    localStorage.setItem('token',JSON.stringify(response.token));
  }

  getUser(): any {
    debugger
    let identity;
    if(localStorage.getItem('user')!=null)
    {
      identity = localStorage.getItem('user');
      if(identity)
      identity = JSON.parse(identity);
    }
    return identity;
  }

  getCollaborator(): Collaborator {
    debugger
    let identity;
    if(localStorage.getItem('user')!=null)
    {
      identity = localStorage.getItem('user');
      if(identity)
      identity = JSON.parse(identity);
    }
    return identity;
  }

  getOrganization(): Organization {
    debugger
    let identity;
    if(localStorage.getItem('user')!=null)
    {
      identity = localStorage.getItem('user');
      if(identity)
      identity = JSON.parse(identity);
    }
    return identity;
  }

  getToken(): any {
    let token = localStorage.getItem('token');
    if(token)
    {
      token = JSON.parse(token);
    }
    return token;
  }

  removeData() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

}
