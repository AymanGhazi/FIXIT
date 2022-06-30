import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { contacts } from 'src/app/interfaces/contacts';
import { MessageItem } from './../../../interfaces/messageItem';
import { dashboardHome } from './../../../interfaces/dashboardHome';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';
import { account } from './../../../interfaces/account';

@Component({
  selector: 'app-messages-message-item',
  templateUrl: './messages-message-item.component.html',
  styleUrls: ['./messages-message-item.component.scss']
})
export class MessagesMessageItemComponent implements OnInit,OnChanges {
@Input() messages!:MessageItem[]
@Input() contact!:contacts
@ViewChild("messageArea") messageArea:any
  constructor(private dashboardService:DashboardService,
              private toaster:ToastrService,
              private accountService: AccountService) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.getMessages()
  }

  ngOnInit(): void {
    this.getMessages()
    
  }

  getMessages(){
   this.dashboardService.getMessagesOfcontacts(this.contact.accountId).subscribe(message=>{
      this.messages=message
      
   })
  }
  sendMessage(message:string){
  var  myAvatarId:number=-1
    this.accountService.currentUser$.subscribe((user:account)=>{
      myAvatarId=  user.avatarId
    })
    var lastindex=this.messages[this.messages.length-1].messageId
    var newMessage:MessageItem={
     messageId:lastindex+1 ,
    messageText: message,
    isMe: true,
    messageDate:new Date(Date.now()),
    fromAvatarId:myAvatarId,
    toAvatarId:this.contact.avatarId
    }
    
    this.dashboardService.sendMessage(newMessage).subscribe(response=>{
      this.toaster.success("message Sent Successfully")
      this.messageArea.nativeElement.value=""
    })
  }
}
