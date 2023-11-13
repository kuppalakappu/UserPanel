import { Component, EventEmitter, Output } from '@angular/core';
import { NavBar } from './sidenav.types';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() optionEmitter = new EventEmitter();
  navList: NavBar[] = [
    { name: 'Practice Assesment', active: false },
    { name: 'Free Assesment', active: false },
    { name: 'Ask Any', active: false },
  ];

  setNav(nav: NavBar) {
    const navItems = [...this.navList];
    const index = navItems.findIndex((ele: NavBar) => ele.name === nav.name);

    navItems.forEach((ele: NavBar, i: number) => {
      if (i === index) {
        ele.active = true;
        this.optionEmitter.emit(ele.name.toLowerCase());
      } else {
        ele.active = false;
      }
    });
    this.navList = [...navItems];
  }
}
