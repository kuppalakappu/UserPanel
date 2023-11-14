import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studentheader',
  templateUrl: './studentheader.component.html',
  styleUrls: ['./studentheader.component.scss'],
})
export class StudentheaderComponent {
  @Input() showlogout: boolean = true;
  userEmail: string = localStorage.getItem('userEmail') || '';
}
