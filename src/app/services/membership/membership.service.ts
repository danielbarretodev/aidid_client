import { Injectable } from '@angular/core';
import { Membership } from 'src/app/models/membership';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GLOBAL} from '../global';
import {Observable} from 'rxjs';
import { MembershipDto } from 'src/app/models/membershipDto';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(
    private http: HttpClient
  ) { }

  create(membershipDto: MembershipDto): Observable<any>{
    debugger
    let json = JSON.stringify(membershipDto);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.post(GLOBAL.url+'/membership', params, {headers:headers});  
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
    return this.http.get(GLOBAL.url+'/membership', {headers:headers});
  }
  

  update(membership: Membership){
    debugger
    let json = JSON.stringify(membership);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.put(GLOBAL.url+'/membership/'+membership.id, params, {headers:headers});  
  }

  delete(membership : Membership): Observable<any> {
    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.delete(GLOBAL.url+'/membership/'+membership.id, {headers:headers});  
  }
}
