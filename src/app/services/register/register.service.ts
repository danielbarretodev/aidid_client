import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from '.././global';
import {Observable} from 'rxjs';
import { Collaborator } from '../../models/collaborator';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public  url: string;
  


  constructor(
    private http: HttpClient
  ){
    this.url = GLOBAL.url;
  }

  register(user: User): Observable<any>{

    debugger
    let json = JSON.stringify(user);
    let params = json;
  //  console.log(params);
  let headers = new HttpHeaders().set('Content-Type','application/json');
    if(user instanceof Collaborator)
    {
      return this.http.post(this.url+'/collaborator', params, {headers:headers});       
    }
  return this.http.post(this.url+'/organization', params, {headers:headers});  
  }

  getUser(user: any): Observable<any>{

    debugger
    let json = JSON.stringify(user);
    let params = json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(this.url+'auth/prueba', {headers:headers});  
  }





}
