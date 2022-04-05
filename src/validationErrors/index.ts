export enum PageValues{
    PHONE = 'PHONE',
    EMAIL = 'EMAIL',
    FIRST_NAME = 'FIRST_NAME',
    LAST_NAME = 'LAST_NAME',
    STATUS = 'STATUS',
    SETUP = 'SETUP'
}
export const validationErrors = (type: PageValues, value: string, arr?:string[]): string => {
    let regName = /^[a-zA-Z_-]{3,16}$/;
    let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    let regMail =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    switch (type) {

        case PageValues.FIRST_NAME:
            if(!regName.test(value)){
                return "Value should contain only letters"
            }
            return ""

        case PageValues.LAST_NAME:
            if(!regName.test(value)){
                return "Value should contain only letters"
            }
            return ""

        case PageValues.SETUP:
            return ""

        case PageValues.STATUS:
            console.log(value)
            let answer = value!='Active'&&value!='Unactive' ? "Choose one of the variants" : ''
            return answer;

        case PageValues.PHONE:
            if(!regPhone.test(value)){
                return "Your phone number is not supported";
            }
            return "";

        case PageValues.EMAIL:
            if(value.length<4){
                return "Your mail is too short";
            }
            if(value.length>50){
                return "Your mail is too long";
            }
            if(!regMail.test(value)){
                return "Mail should be like [login]@[domen].[region]";
            }
            return "";
        default:
            return "";
    }
}