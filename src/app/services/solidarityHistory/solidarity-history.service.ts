import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GLOBAL} from '../global';
import {Observable} from 'rxjs';
import { SolidarityHistory } from 'src/app/models/solidarity-history';

@Injectable({
  providedIn: 'root'
})
export class SolidarityHistoryService {
  constructor(
    private http: HttpClient
  ) { }

  create(solidarityHistory: SolidarityHistory): Observable<any>{
    debugger
    let json = JSON.stringify(solidarityHistory);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.post(GLOBAL.url+'/solidarityHistory', params, {headers:headers});  
  }

  get(idSolidarity: number){
    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.get<SolidarityHistory>(GLOBAL.url+'/solidarityHistory/'+idSolidarity, {headers:headers});  
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
   
    return this.http.get(GLOBAL.url+'/solidarityHistory', {headers:headers});
  }

  update(solidarityHistory: SolidarityHistory){
    debugger
    let json = JSON.stringify(solidarityHistory);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.put(GLOBAL.url+'/solidarityHistory/'+solidarityHistory.id, params, {headers:headers});  
  }

  delete(solidarityHistory : SolidarityHistory): Observable<any> {
    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
   
    return this.http.delete(GLOBAL.url+'/solidarityHistory/'+solidarityHistory.id, {headers:headers});
  }
}
