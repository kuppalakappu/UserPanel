import { Component } from '@angular/core';
import { AskAnyService } from './ask-any.service';
import { Answer } from './askany.types';
@Component({
  selector: 'app-ask-any',
  templateUrl: './ask-any.component.html',
  styleUrls: ['./ask-any.component.scss'],
})
export class AskAnyComponent {
  question: String = '';
  answer: string = '';
  constructor(private askAnyService: AskAnyService) {}
  quest() {
    const ques = { question: this.question };

    this.askAnyService.quest(ques).subscribe((res: Answer) => {
      this.answer = res.answer;
    });
  }
}
