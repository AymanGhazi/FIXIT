import { Component, OnInit } from '@angular/core';
import { BsModalRef, ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
import { galleries } from 'src/app/interfaces/galleries';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AlbumEditModalComponent } from '../album-edit-modal/album-edit-modal.component';
import { Photo } from './../../../interfaces/photos';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
   
    albumTitle=""
    gallaryId:number=-1
    photos:Photo[]=[]
    selectedAvatar:string=""
    galleries:galleries[]=[]
    modalRef:BsModalRef=new BsModalRef
    ModalOptions:ModalOptions={}
  constructor(private DashboardService:DashboardService,private BsModalService:BsModalService) { }

  ngOnInit(): void {
    this.getGallaries()
  
  }

      getGallaries(){
      return this.DashboardService.getGallaries().subscribe(gallary=>{
        this.galleries=gallary
      })
      }
      getImages(gallaryId:number){
        const images:Photo[]=[];
      this.galleries.forEach(gallary => {
        if (gallary.albumId==gallaryId) {
          gallary.photos.forEach(photo=>{
            images.push(photo)
          })
          this.albumTitle=gallary.title
        }
      });
      return images
      }

      openGallary(gallaryId:number){
              this.gallaryId=gallaryId,
              this.photos=this.getImages(gallaryId)
      }

    
}
