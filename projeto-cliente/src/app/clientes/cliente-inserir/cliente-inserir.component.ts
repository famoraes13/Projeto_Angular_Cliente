import { Component, EventEmitter, Output } from "@angular/core";
import { Cliente } from "../cliente.model";

@Component({
    selector: 'app-cliente-inserir',
    templateUrl: './cliente-inserir.component.html',
    styleUrls: ['cliente-inserir.component.css'],

})

export class ClienteInserirComponent {

    @Output() clienteAdicionado = new EventEmitter<Cliente>();
    fone: string;
    email: string;
    nome: string;

    constructor() {
        this.nome = "";
        this.fone = "";
        this.email = "";
    }
    onAdicionarCliente() {
        //console.log("Inserindo um cliente..");

        const cliente: Cliente = {
            nome: this.nome,
            fone: this.fone,
            email: this.email,
        };

        this.clienteAdicionado.emit(cliente);

    }
}