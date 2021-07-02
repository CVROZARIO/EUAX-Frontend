import { NgForm } from "@angular/forms";

export default class CommonsJs {
    CallSimpleModelAlert(title: string, message: string, callbackHide: any): void;
    CallSimpleModelAlertSuccess(message: string): void;
    ParseSimpleError(error: object): void;
    CheckIfFormIsValid(createForm: NgForm): Boolean
 }