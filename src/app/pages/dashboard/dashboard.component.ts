import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  header: string = 'welcome';
  message: string = 'welcome to the student portal,congratulations u earned 1000points';
  showDialog: boolean = true;
  option: string = '';
  closePopup(close: boolean) {
    this.showDialog = close;
  }
  setOption(name: string) {
    this.option = name;
  }
}
