import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-gallary-modal',
  templateUrl: './gallary-modal.component.html',
  styleUrls: ['./gallary-modal.component.scss']
})
export class GallaryModalComponent implements OnInit {
gallaryId:number=0
photos:string[]=[]
GallaryPhotos :NgxGalleryImage[]=this.photos
galleryOptions: NgxGalleryOptions[]=[]

  constructor(public BsModalRef: BsModalRef) { }

  ngOnInit(): void {
    console.log(this.gallaryId)
     this.galleryOptions=[{
      width:"350px",
      height:"350px",
      imagePercent:100,
      thumbnailsColumns:4,
      arrowPrevIcon :"fa fa-angle-double-left",
      arrowNextIcon :"fa fa-angle-double-right",
      imageAnimation:NgxGalleryAnimation.Fade,
      preview:false   
    }]
    this.GallaryPhotos=this.getImages()
  }

  
  removeGallary(){
    

  }
  getImages():NgxGalleryImage[]{
    const imageUrls=[];
    if (this.photos.length>0) {
  for(const photo of this.photos) {
    imageUrls.push({
      small:photo,
      medium:photo,
      big:photo
    })}     
    }
    return imageUrls;
  }
}
