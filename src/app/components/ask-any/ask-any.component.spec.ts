import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAnyComponent } from './ask-any.component';

describe('AskAnyComponent', () => {
  let component: AskAnyComponent;
  let fixture: ComponentFixture<AskAnyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskAnyComponent],
    });
    fixture = TestBed.createComponent(AskAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
