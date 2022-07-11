import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ACCESS_KEY } from 'src/environments/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class HeaderMenuService {

  constructor(private http:HttpClient) { }
  list(): Observable<any> {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + ACCESS_KEY
    });

    return this.http.get<any>('http://45.9.191.123:3000/api/web/nav/list', {

      headers: headers_object

    }).pipe(map(result => {

      return result;

    }))

  }
}
