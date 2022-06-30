import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Registervalidators } from 'src/app/auth/validators/register-validators';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';


import { FrontendServiceService } from '../../../services/frontend-service.service';
import { AlbumEditModalComponent } from '../album-edit-modal/album-edit-modal.component';
import { AvatarSelectModalComponent } from '../avatar-select-modal/avatar-select-modal.component';
import { galleries } from './../../../interfaces/galleries';
import { dashboardSettings } from './../../../interfaces/DashboardSettings';
import { mobileItem } from './../../../interfaces/mobileItem';
import { DashboardService } from './../../../services/dashboard.service';
import { CategoryItem } from './../../../interfaces/front/home-category-item';
import { locations } from 'src/app/interfaces/locations';
import { areaItem } from './../../../interfaces/areaOptionItem';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],

})
export class SettingsComponent implements OnInit {
userInfo!:dashboardSettings
initialvalues!:dashboardSettings

    @ViewChild('Phoneinput') phoneinput:any;
    marginleft="margin-left: 0px;"
    isNew=false
    discription=""
    selectedAvatar:string=""
    galleries:galleries[]=[]
    cityOptions!:locations[]
    categoryOptions!:CategoryItem[]
    areaOptions!:areaItem[]
    changePasswordForm:FormGroup=new FormGroup({})

      // Photo And Gallary
    modalRef:BsModalRef=new BsModalRef
    ModalOptions:ModalOptions={}
      get control () {
      return this.changePasswordForm.controls as any
    }
  constructor(private toaster:ToastrService,private BsModalService:BsModalService,
    private DashboardService:DashboardService,
    private frontService:FrontendServiceService,
    private route:ActivatedRoute) { 
       this.route.data.subscribe(data=>{
          this.userInfo=data?.['settings']
          this.userInfo.mobiles=data?.['settings'].mobiles
          console.log(data?.['settings'] )
        })
      }

      ngOnInit(): void {
          this.getGallaries()
          this.toaster.warning("changes will not be applied unless you save changes","Warning")
         // this.setPasswordValidators()
         this.getcities()
         this.getcategories()
         this.initializePasswordForm()
         //this.GetDashboardSettings()

        }
        //Password form
        currentpassword=new FormControl("",[])
        newPassword=new FormControl("",[])
        confirmPassword=new FormControl("",[])
        
        initializePasswordForm(){
        this.changePasswordForm=new FormGroup({
        password:this.newPassword,
        currentpassword:this.currentpassword,
        confirmPassword:this.confirmPassword,
        },[Registervalidators.match('currentpassword','confirmPassword')])
        }
      //getting Info

      addPhone(number:any){
        var lastindex=this.userInfo.mobiles[this.userInfo.mobiles.length-1].mobileId
        if(this.userInfo.mobiles.length<=0){
          lastindex=0
        }
        var newNumber:mobileItem={
          mobile:number,
          mobileId:lastindex+1,
          accountId:this.userInfo.accountId,
          createDate:new Date(Date.now()),
        }
      this.userInfo.mobiles.push(newNumber)
      this.phoneinput.nativeElement.value=""
     
      }
      removeNumber(number:any){
      this.userInfo.mobiles=this.userInfo.mobiles.filter(item=> item.mobile !=number)
      this.editProfile()
      }
    
      getGallaries(){
      return this.DashboardService.getGallaries().subscribe(gallary=>{
        this.galleries=gallary
      })
      }
      getImages(gallaryId:number){
        const images:string[]=[];
      this.galleries.forEach(gallary => {
        if (gallary.albumId==gallaryId) {
          gallary.photos.forEach(photo=>{
            images.push(photo.photoPath)
          })
          this.discription=gallary.title
        }
      });
      return images
      }

      openGallary(gallaryId:number){
      this.ModalOptions = {
            class:'modal-dialog-centered',
            initialState:{
              gallaryId:gallaryId,
              photos:this.getImages(gallaryId),
              discription:this.discription,
              isNew: this.isNew
            }}
      this.modalRef=this.BsModalService.show(AlbumEditModalComponent,this.ModalOptions)
      }

      showNNewModal(){
        this.isNew=true
        this.discription=""
        this.openGallary(-1)
      }

      openAvatarSelect(){
      this.ModalOptions = {
            class:'modal-dialog-centered',
            initialState:{
            
            }}
      this.modalRef=this.BsModalService.show(AvatarSelectModalComponent,this.ModalOptions)
      this.modalRef.content?.updateAvatarToSettings.subscribe((element:string)=>{
      this.selectedAvatar=element
      })
      }
      showAvatarModal(){
        this.openAvatarSelect()
      }

    //   GetDashboardSettings(){
    //   this.DashboardService.getDashboardSettings().subscribe(settings=>{
    //     this.userInfo=settings
    //     this.userInfo.mobiles=settings.mobiles
    //     console.log(this.userInfo)
    //   })
    // }
      getcategories(){
      this.frontService.getCategories().subscribe(categories=>{
        this.categoryOptions=categories
      })}
      getcities(){
        this.frontService.getLocations().subscribe(cities=>{
          this.cityOptions=cities
        })
      }

      getareasOfCity(select:any|null){
      this.frontService.getACity(select.value).subscribe(areas=>{
        this.areaOptions=areas.areas
      })
      }
    editProfile(){
      this.userInfo.password=this.currentpassword.value
      this.userInfo.newPassword=this.newPassword.value
      this.userInfo.confirmPassword=this.confirmPassword.value
      this.DashboardService.updateProfileInfo(this.userInfo).subscribe(response=>{
        this.toaster.success("Settings Updated Successfully")
      console.log(this.userInfo)
      })

      }

      





}
