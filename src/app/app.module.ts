import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SparkoutChatWidgetModule } from 'sparkout-chat-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SparkoutChatWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
