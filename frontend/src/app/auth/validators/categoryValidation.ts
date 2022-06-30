import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class registerCategoryvalidators {
    static Typematch(controlName:string,comparedControlName:string):ValidatorFn{

    return (group:AbstractControl):ValidationErrors|null=>{
    const Control=group.get('type')
    const confirmControl=group.get('categoryId')

    if(!Control || !confirmControl){
        console.error('form controls are not found in formgroups')
       

        return {ControlNotFound:false}
    }
     var Error=null
    if (Control.value =="Technician") {
        Error=  confirmControl.value !=-1 ? null :{Notmatch:true}
    }

    confirmControl.setErrors(Error)
        return Error
    }
    }
    
}
