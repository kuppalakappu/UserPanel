import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root',
})
export class StudentheaderService {
	constructor(private httpClient: HttpClient) {}

	logOut() {
		console.log('ddd');
		return this.httpClient.get(
			'https://localhost:7137/api/User/GetUserLoginDetails',
			{
				headers: {
					'content-type': 'application/json',
				},
			}
		);
	}
}
