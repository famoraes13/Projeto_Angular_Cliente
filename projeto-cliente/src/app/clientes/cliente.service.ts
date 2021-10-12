import { Cliente } from "./cliente.model";

export class ClienteService {

    private clientes: Cliente[] = [];
    getClientes(): Cliente[] {
        return [...this.clientes];
    }
    adicionarCliente(binario: string, decimal: number) {
        const cliente: Cliente = {
            binario: binario,
            decimal: decimal,

        }
        this.clientes.push(cliente);
    }
}