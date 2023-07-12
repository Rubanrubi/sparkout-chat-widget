import { Component } from '@angular/core';
import { SparkoutChatWidgetService } from 'sparkout-chat-widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-testing';

  constructor(private sparWidgetService: SparkoutChatWidgetService) {
    this.sparWidgetService.setBaseURI("http://54.174.204.232:8005");

  }
}
