import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SparkoutChatWidgetService } from './sparkout-chat-widget.service';
import { ScrollToBottomDirective } from './scroll-to-bottom-directive';

@Component({
  selector: 'lib-sparkout-chat-widget',
  templateUrl: './sparkout-chat-widget.component.html',
  styleUrls: ['./sparkout-chat-widget.component.css']
})
export class SparkoutChatWidgetComponent {
  public showMessagePanel: boolean = false;
  public chatForm:FormGroup;
  public answer:any ='';
  public message:any;
  public apiresonsemessage:Array<string>=[];
  public storage:any;
  public messages:Array<string>=[];
  public storedArray:any;
  public updatedArrayString:any=[];
  public updateMessage:any;
  public showSpinner:boolean=false
  public messagesString:any;
  public scrollTop:any;
  public scrollDirection:any;
  @ViewChild(ScrollToBottomDirective)
  scroll!: ScrollToBottomDirective;

  constructor(private chatservice: SparkoutChatWidgetService, private formBuilder:FormBuilder){
    this.chatForm = this.formBuilder.group({
      message: ['', Validators.required],
    });
  }
  public toggleMinMax:any;
  ngOnInit(): void {
    this.toggleMinMax=false;
    this.chatservice.storeDigitalFiels().subscribe(a=>{
     this.answer=a;
     this.storage= this.answer;
    })
    this.messages=[];
    this.apiresonsemessage=[];
    //this.scrollDirection();
  }

  messageSend(){
    if(this.chatForm.valid){
        this.messages.push(this.chatForm.value.message);
      if(this.chatForm.value.message){
        this.chatservice.sendMessage(this.chatForm.value.message).subscribe((data: any)=>{
          const showData: string=data?.body?.answer;
          if(showData){
            this.showSpinner=true;
            this.apiresonsemessage.push(showData);

          }
       })
        this.chatForm.reset();
      }
    }
  }

  public openMessagePanel() {
    this.showMessagePanel = !this.showMessagePanel;
  }

}
