import { ValidatorFn, AbstractControl } from '@angular/forms'

export function forbiddenStringValidator(strReg: RegExp): ValidatorFn{
    //Control is the formControl
    return(control: AbstractControl): { [key: string ]: any } =>{
        //Extract the value of the formGrou with value
        const str = control.value;

        //StrReg will check if the test is true,
        //If it true it will set invalid to true
        const invalid = strReg.test(str);
        //The key is a string
        //The value could be anything
        //Look at return type above

        //If valid return message else return nothing
        return invalid ? { 'forbiddenString': {str}} : null
    }
}