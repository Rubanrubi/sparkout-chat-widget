import { NgModule } from '@angular/core';
import { SparkoutChatWidgetComponent } from './sparkout-chat-widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SparkoutChatWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SparkoutChatWidgetComponent
  ]
})
export class SparkoutChatWidgetModule { }
