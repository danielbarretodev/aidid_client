import { Injectable } from '@angular/core';
import { Donation } from 'src/app/models/donation';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GLOBAL} from '../global';
import {Observable} from 'rxjs';
import { DonationDto } from 'src/app/models/donationDto';

@Injectable({
  providedIn: 'root'
})
export class DonationService  {

  constructor(
    private http: HttpClient
  ) { }

  create(donationDto: DonationDto): Observable<any>{
    debugger
    let json = JSON.stringify(donationDto);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.post(GLOBAL.url+'/donation', params, {headers:headers});  
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
    return this.http.get(GLOBAL.url+'/donation', {headers:headers});
  }

  get(idDonation: number): Observable<any>{

    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
   
    return this.http.get(GLOBAL.url+'/donation/'+idDonation, {headers:headers});  
  }

  update(donation: Donation){
    debugger
    let json = JSON.stringify(donation);
    let token = localStorage.getItem("token")  || '{}';
    let params = json;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.put(GLOBAL.url+'/donation/'+donation.id, params, {headers:headers});  
  }

  delete(donation : Donation): Observable<any> {
    debugger
    let token = localStorage.getItem("token")  || '{}';
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    )
    return this.http.delete(GLOBAL.url+'/donation/'+donation.id, {headers:headers});  
  }
}
