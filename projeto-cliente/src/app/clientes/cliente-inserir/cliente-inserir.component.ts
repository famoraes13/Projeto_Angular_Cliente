import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
//import { Cliente } from "../cliente.model";  remover - tudo passa pelo service
import { ClienteService } from "../cliente.service";

@Component({
    selector: 'app-cliente-inserir',
    templateUrl: './cliente-inserir.component.html',
    styleUrls: ['cliente-inserir.component.css'],

})

export class ClienteInserirComponent {


    constructor(public clienteService: ClienteService) { // quando adicionado não precisa mais dos eventos


    }

    // @Output() clienteAdicionado = new EventEmitter<Cliente>();  //  clienteservice
    // fone: string;
    // email: string;
    // nome: string;

    //  constructor() {
    //     this.nome = "";
    //      this.fone = "";
    //      this.email = "";
    //  }


    onAdicionarCliente(form: NgForm) {


        //console.log("Inserindo um cliente..");
        if (form.invalid) {

            return;
        }
        this.clienteService.adicionarCliente(
            form.value.nome,
            form.value.fone
            //form.value.email
        );
        form.resetForm();

        //  const cliente: Cliente = {  // cliente service
        //    nome: form.value.nome,
        //     fone: form.value.fone,
        //     email: form.value.email,
        //  };

        // this.clienteAdicionado.emit(cliente);
        //  }

    }
}