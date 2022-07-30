

import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ACCESS_KEY, API_URL } from 'src/environments/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + ACCESS_KEY
    });

    return this.http.get<any>(API_URL+'brandsPage/byType/Products', {

      headers: headers_object

    }).pipe(map(result => {

      return result;

    }))

  }
}
