import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TechnicianItem } from 'src/app/interfaces/front/home-technician-item';
import { ReviewItem } from 'src/app/interfaces/reviewItem';
import { GallaryModalComponent } from '../gallary-modal/gallary-modal.component';
import { ReviewModalComponent } from './../review-modal/review-modal.component';
import { galleries } from './../../../../interfaces/galleries';
import { FrontendServiceService } from './../../../../services/frontend-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
review:ReviewItem={
    accountId:0,
    accountName:"",
    createDate: new Date(Date.now()),
    reviewText:"",
    rate:0,
}
  showReviewModal: boolean = false;
  profileInfo!: TechnicianItem;
  reviews!: ReviewItem[];
  albums!: ReviewItem[];
  modalRef:BsModalRef=new BsModalRef
  ReviewRef:BsModalRef=new BsModalRef
  ModalOptions:ModalOptions={
  }
  ReviewModalOptions:ModalOptions={

  }

gallaries:galleries[]=[]

  constructor(private BsModalService:BsModalService,
     private FrontendServiceService:FrontendServiceService,
     private route:ActivatedRoute) {

     //FrontendServiceService.getTechnicianProfile().subscribe(tech=>{ });
    
   
  }
  

  ngOnInit(): void {
    this.getGallaries()
      this.route.data.subscribe(data=>{
      this.profileInfo=data?.['technicianinfo']
      this.getProfileReviews()
     })

  } 
getGallaries(){
 return this.FrontendServiceService.getGallaries().subscribe(gallary=>{
  this.gallaries=gallary
 })

}
getImages(gallaryId:number){
  const images:string[]=[];
 this.gallaries.forEach(gallary => {
  if (gallary.albumId==gallaryId) {
    gallary.photos.forEach(photo=>{
      images.push(photo.photoPath)
    })
  }
});
return images
}


openGallary(gallaryId:number){
 this.ModalOptions = {
      class:'modal-dialog-centered',
      initialState:{
        gallaryId:gallaryId,
        photos:this.getImages(gallaryId)
      }
      }
this.modalRef=this.BsModalService.show(GallaryModalComponent,this.ModalOptions)

} 
                                    //Reviews
 getProfileReviews(){
        this.FrontendServiceService.getProfileReviews(this.profileInfo.id).subscribe((review:any[])=>{
          this.reviews=review
          console.log(this.reviews);
          
    });
     }

  openReviewModal() : void{ 
  this.ReviewModalOptions={
     class:'modal-dialog-centered',
      initialState:{
        userName:this.profileInfo.name
      }
  }
   this.ReviewRef= this.BsModalService.show(ReviewModalComponent, this.ReviewModalOptions)
    this.ReviewRef.content?.updateReviews.subscribe((values:any)=>{
     this.review=values,
     
     this.submitreview()
  })
  } 
 
  submitreview(){ 
 this.review.accountId=this.profileInfo.id
 this.review.accountName="" //current user
 this.review.createDate= new Date(Date.now())
this.FrontendServiceService.addProfileReview(this.review.accountId,this.review).subscribe(result=>{
 this.reviews.push(result)
})
  }

  
}
 