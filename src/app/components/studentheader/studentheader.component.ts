import { Component, Input } from '@angular/core';
import { StudentheaderService } from './studentheader.service';

@Component({
	selector: 'app-studentheader',
	templateUrl: './studentheader.component.html',
	styleUrls: ['./studentheader.component.scss'],
})
export class StudentheaderComponent {
	@Input() showlogout = true;
	userEmail: string = localStorage.getItem('userEmail') || '';
	constructor(private studentheaderService: StudentheaderService) {}
	logOut() {
		this.studentheaderService.logOut();
	}
}
