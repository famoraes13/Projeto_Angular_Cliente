import { Component } from "@angular/core";

@Component({
    selector: 'app-cliente-inserir',
    templateUrl: './cliente-inserir.component.html',
    styleUrls: ['cliente-inserir.component.css'],

})

export class ClienteInserirComponent {
    fone: string;
    email: string;
    nome: string;

    constructor() {
        this.nome = "";
        this.fone = "";
        this.email = "";
    }
    onAdicionarCliente() {
        console.log("Inserindo um cliente..");

    }
}

