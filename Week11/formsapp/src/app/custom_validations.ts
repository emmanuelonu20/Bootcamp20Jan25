import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function avoidWord(fc: AbstractControl){
    let notAllowed = /hacker/.test(fc.value); //regular expression

    if(notAllowed){
        return {
            prohibited: {value: fc.value}
        }
    }else {
        return null;
    }
}

export function prohibited(reg:RegExp) : ValidatorFn{
    return (fc:AbstractControl) : ValidationErrors | null => {
        let notAllowed = reg.test(fc.value.toLowerCase());

        if(notAllowed){
            return {
                prohibited: {value: fc.value}
            };
        }
        else{
            return null;
        }
    }
}