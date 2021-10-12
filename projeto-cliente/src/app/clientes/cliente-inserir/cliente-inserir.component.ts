import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Cliente } from "../cliente.model";

@Component({
    selector: 'app-cliente-inserir',
    templateUrl: './cliente-inserir.component.html',
    styleUrls: ['cliente-inserir.component.css'],

})

export class ClienteInserirComponent {

    @Output() clienteAdicionado = new EventEmitter<Cliente>();
    binario: string;
    decimal: number;


    constructor() {
        this.binario = "";
        this.decimal = 0;
    }

    onCalcular(form: NgForm) {
        if (form.invalid) {

            return;
        }

        this.binario = form.value.binario;

        var binaryText = new String(this.binario);

        var resultado = 0;

        for (var c = binaryText.length - 1, i = 0; c >= 0; c--, i++) {
            resultado += parseInt(binaryText[c]) * Math.pow(2, i);
        }

        this.decimal = resultado;
    }

    /*onAdicionarCliente(form: NgForm) {
        //console.log("Inserindo um cliente..");
        if (form.invalid) {

            return;
        }
        const cliente: Cliente = {
            nome: form.value.nome,
            fone: form.value.fone,
            email: form.value.email,
        };

        this.clienteAdicionado.emit(cliente);

    }*/
}