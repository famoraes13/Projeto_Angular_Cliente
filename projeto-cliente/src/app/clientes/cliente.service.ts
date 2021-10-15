import { Injectable } from "@angular/core";
import { Cliente } from "./cliente.model";
import { Subject } from "rxjs";   //observador - assim que alterar ele atualiza a lista 

@Injectable({ providedIn: 'root' })

export class ClienteService {

    private clientes: Cliente[] = [];
    private listaClientesAtualizada = new Subject<Cliente[]>();

    getClientes(): Cliente[] {
        return [...this.clientes];
    }
    adicionarCliente(binario: string, decimal: number) {
        const cliente: Cliente = {
            binario: binario,
            decimal: decimal,

        }
        this.clientes.push(cliente);
        this.listaClientesAtualizada.next([...this.clientes]);
    }

    getListaDeClientesAtualizadaObservable() {
        return this.listaClientesAtualizada.asObservable();
    }
}