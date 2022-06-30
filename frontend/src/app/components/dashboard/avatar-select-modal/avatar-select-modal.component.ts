import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-avatar-select-modal',
  templateUrl: './avatar-select-modal.component.html',
  styleUrls: ['./avatar-select-modal.component.scss']
})
export class AvatarSelectModalComponent implements OnInit {
avatars:string[]=[]
selectedAvatar=""
@Input()  updateAvatarToSettings=new EventEmitter();
  constructor( public BsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.getAssetsAvatars()
  }

  
  updateSelectedAvatar(){ 
console.log(this.selectedAvatar)

this.updateAvatarToSettings.emit(this.selectedAvatar)
this.BsModalRef.hide();

  }
  getAssetsAvatars(){
    for (let i = 1; i < 9; i++) {
      this.avatars.push(`/assets/avatars/avatar-${i}.png`)
    }
  }
  

}
