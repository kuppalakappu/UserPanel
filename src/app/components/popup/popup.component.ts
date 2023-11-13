import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() header: string = '';
  @Input() message: string = '';
  @Output() closeEmitter = new EventEmitter<boolean>();

  close() {
    this.closeEmitter.emit(false);
  }
}
