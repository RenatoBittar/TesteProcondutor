import { Cliente } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[]
  
  router: any;
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit():void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes)
    })
  }

  navigateToClienteDelete():void{
    this.router.navigate(['/cliente/delete']).Cliente.id
  }

  navigateToClienteUpdate():void{
    this.router.navigate(['/cliente/update'])
  }
}
