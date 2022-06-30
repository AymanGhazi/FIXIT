import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { Photo } from './../../../interfaces/photos';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-album-edit-modal',
  templateUrl: './album-edit-modal.component.html',
  styleUrls: ['./album-edit-modal.component.scss']
})
export class AlbumEditModalComponent implements OnInit,OnChanges {
  @Input() gallaryId:number=0
   
  ResponseOK=false
  InitUpload=false
  @Input() title=""
  @Input() photos:Photo[]=[]
  @Input ()albumId!:number


 

  uploader!:FileUploader;
  hasBaseDropZoneOver=false;
  baseUrl=environment.apiUrl;


      constructor(private dashboardService:DashboardService) {}


      ngOnChanges(changes: SimpleChanges): void {
      if (changes?.['photos']) {
      this.photos= changes?.['photos'].currentValue
   
      }}

      ngOnInit(): void {

      console.log(this.title )
      console.log(this.photos )

      this.initializeUploader()
      }


      fileOverBase(e:any){
      this.hasBaseDropZoneOver=e;

      }

      initializeUploader(){
      this.uploader=new  FileUploader({
      url:this.baseUrl+'gallaries/add-photo',
      isHTML5:true,
      allowedFileType:["image"],
      removeAfterUpload:true,
      autoUpload:false,
      maxFileSize:10*1024*1024
      });
      //to disable the credentials sent with the initializeUploader via authToken
      this.uploader.onAfterAddingFile=(file)=>{

      file.withCredentials=false;

      }
      //add the photo after the response to user.photos array
      this.uploader.onSuccessItem=(item,response,status,header)=>{

      if(response){

        this.ResponseOK=true
      const photo=JSON.parse(response)

      this.photos.push(photo)


      }
      }

  }
  deletephoto(photoId:number){
   this.dashboardService
    
  }
  
  removeAlbum(){

  }
  updateAlbumName(){

   
  
}

}
