import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss']
})
export class ReviewModalComponent implements OnInit {
@Input()  updateReviews=new EventEmitter();
userName=""
  constructor( public BsModalRef: BsModalRef) { }

  ngOnInit(): void {
    
  }
values={
  rating:"",
  reviewComment:""
}
  submitReview(){ 
    this.updateReviews.emit(this.values)
this.BsModalRef.hide();

  }

}
