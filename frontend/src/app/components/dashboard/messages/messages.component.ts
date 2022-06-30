import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contacts } from 'src/app/interfaces/contacts';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MessageItem } from './../../../interfaces/messageItem';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
     messagesLoaded=false
    userContacts :contacts[] =[]
    messages:MessageItem[]=[]
    clickedContact!:contacts
    activetab:number=1

  constructor(private dashboardService:DashboardService){ }

  ngOnInit(): void {
   this.GetContatcts()
  
  }

  GetContatcts(){
    this.dashboardService.GetContacts().subscribe((contacts)=>{
     this.userContacts=contacts
      if (this.userContacts.length>0) {
          this.clickedContact=contacts[0]
          this.GetMessages(this.clickedContact?.accountId)
          this.messagesLoaded=true
        }
    })

  }
  GetMessages(ContactId:number){
    this.dashboardService.getMessagesOfcontacts(ContactId).subscribe(message=>{
      this.messages=message
      console.log(message)
    })
  }
  contactClicked(contact:contacts){
    this.clickedContact=contact
    this.activetab=this.clickedContact.accountId
  }
  

}
