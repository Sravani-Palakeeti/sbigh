import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ACCESS_KEY, API_URL } from 'src/environments/constants/constants';


@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }
  
   PostMessage(formData:FormData): Observable<any>{
     const headers = { 'content-type': 'application/json','Authorization': "Bearer " + ACCESS_KEY}  
    const body=JSON.stringify(formData);
    return this.http.post(API_URL+'contact/create', body,{'headers':headers})
  }
  
}
