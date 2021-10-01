import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  @Input() clientes: Cliente[] = [];

  /*clientes = [
    {
      nome: "Felipe",
      fone: "11995555555",
      email: "felipe.moraes@gmail.com"

    },
    {
      nome: "Henrique",
      fone: "19955558888",
      email: "henrique.moraes2gmail.com"
    },

  ];*/

  constructor() { }

  ngOnInit(): void {
  }

}
