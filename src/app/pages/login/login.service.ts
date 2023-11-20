import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import type { Credentials } from './login.types';
@Injectable({
	providedIn: 'root',
})
export class LoginService {
	constructor(private httpClient: HttpClient) {}

	login(credentials: Credentials): Observable<any> {
		return this.httpClient.post(
			'https://localhost:7137/api/User/GetUserLoginDetails',
			credentials,
			{
				headers: {
					'content-type': 'application/json',
				},
			}
		);
	}
}
