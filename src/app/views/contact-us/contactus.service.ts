import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ACCESS_KEY, API_URL } from 'src/environments/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private api = API_URL+'contact_us'
  constructor(private http: HttpClient) { }
  
  list() {
      var headers_object = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + ACCESS_KEY
      });
    }

  PostMessage(input:any){
    return this.http.post(this.api,input,{responseType:'text'}).pipe(
      map(
        (response) => {
        // if(response){
          return response;
        // }  
        // (error:any) => {
        //   return error
        // }  
        },
      )
    )
  }

}
