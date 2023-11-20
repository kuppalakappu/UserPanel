import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import type { Credentials } from './login.types';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	email = '';
	password = '';
	constructor(
		private loginService: LoginService,
		private route: Router
	) {}

	login() {
		const credentials:Credentials = { email: this.email, location: '', ipAddress: '' };
    this.route.navigate(['/dashboard']);
		this.loginService.login(credentials).subscribe((res: Credentials) => {
			//this.password = res.password;
			this.route.navigate(['/dashboard']);
		});
	}
}
