import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class Registervalidators {
    static match(controlName:string,comparedControlName:string):ValidatorFn{

    return (group:AbstractControl):ValidationErrors|null=>{
    const Control=group.get('password')
    const confirmControl=group.get('confirmPassword')

    if(!Control || !confirmControl){
        console.error('form controls are not found in formgroups')
       
        
        return {ControlNotFound:false}
    }
    const Error=Control.value==confirmControl.value ? null :{Notmatch:true}
    confirmControl.setErrors(Error)
        return Error
    }
    }
    
}
