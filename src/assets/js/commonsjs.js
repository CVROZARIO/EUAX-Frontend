"use strict";
export default class CommonsJs {

    Gbl_DefaultMNodal = null;

    constructor() {
        this.Gbl_DefaultMNodal = $("#modal_default_wrapper");
        $('button[data-dismiss="modal"]', this.Gbl_DefaultMNodal)
            .on('click', () => {
                this.Gbl_DefaultMNodal.modal('hide');
            });
    }

    CallSimpleModelAlert(title, message, callbackHide) {
        this.Gbl_DefaultMNodal.find(".modal-title").html(title);
        this.Gbl_DefaultMNodal.find(".modal-body").html(message != null ? message : "");
        this.Gbl_DefaultMNodal
            .modal('show')
            .on('hide.bs.modal', function (e) {
                if (typeof callbackHide === "function") {
                    callbackHide();
                }
            });
    };

    CallSimpleModelAlertSuccess(message){
        this.CallSimpleModelAlert("Sucesso!", message, function(){
          window.location.reload();
        });
    }

    ParseSimpleError(error){
        try{
          this.CallSimpleModelAlert("Atenção!", error.error.message, null);
        }catch{
          console.log(error);
          this.CallSimpleModelAlert("Atenção!", "Ocorreu um erro, veja o log gerado no console.", null);
        }
    }

    CheckIfFormIsValid(createForm){
        if(!createForm.valid){
            this.CallSimpleModelAlert("Atenção!", "Formulário inválido.<br/>Por favor, verifique e tente novamente.", null);
            return false;
        }
        return true;
    }
    
};
