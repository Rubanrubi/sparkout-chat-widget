import { TestBed } from '@angular/core/testing';

import { SparkoutChatWidgetService } from './sparkout-chat-widget.service';

describe('SparkoutChatWidgetService', () => {
  let service: SparkoutChatWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparkoutChatWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
