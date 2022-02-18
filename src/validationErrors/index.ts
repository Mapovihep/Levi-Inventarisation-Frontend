export enum PageValues{
    PHONE = 'PHONE',
    EMAIL = 'EMAIL',
    FIRST_NAME = 'FIRST_NAME',
    LAST_NAME = 'FIRST_NAME',
    STATUS = 'STATUS'
}
export const validationErrors = (type: PageValues, value: string): string => {
    switch (type) {
        case PageValues.PHONE:
            let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
            console.log(value.substring(2))
            if(value.substring(2).length<9){
                return "Your phone number is too short";
            }
            if(value.substring(2).length>14){
                return "Your phone number is too long";
            }
            if(!regPhone.test(value)){
                return "Your phone number is not supported";
            }
            return "";
            
        case PageValues.EMAIL:
            let regMail =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; 
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
        case PageValues.STATUS:
            let answer = value!='true'&&value!='false' ? "Choose one of the variants" : '' 
            return answer;
        case PageValues.FIRST_NAME, PageValues.LAST_NAME:
            let regName = /([A-Za-z0-9-]+)?/;
            
            return "" 
        default:
            return "";
    }
}