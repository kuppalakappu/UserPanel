import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Answer, Question } from './askany.types';
@Injectable({
	providedIn: 'root',
})
export class AskAnyService {
	constructor(private httpClient: HttpClient) {}

	quest(question: Question): Observable<any> {
		return this.httpClient.get(
			'https://localhost:7137/api/User/GetUserLoginDetails' + question,
			{
				headers: {
					'content-type': 'application/json',
				},
			}
		);
	}
}
