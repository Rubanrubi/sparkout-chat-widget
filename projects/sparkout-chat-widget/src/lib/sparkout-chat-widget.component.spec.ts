import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkoutChatWidgetComponent } from './sparkout-chat-widget.component';

describe('SparkoutChatWidgetComponent', () => {
  let component: SparkoutChatWidgetComponent;
  let fixture: ComponentFixture<SparkoutChatWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkoutChatWidgetComponent]
    });
    fixture = TestBed.createComponent(SparkoutChatWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
