import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.httpClient.post('https://localhost:7137/api/User/GetUserLoginDetails', credentials, {
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
