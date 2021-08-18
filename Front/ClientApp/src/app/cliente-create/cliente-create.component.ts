import { Cliente } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  
  cliente: Cliente = {
    id:+'',
    nome: '',
    email: '',
    cidade:'',
  
   
  }

  constructor(private ClienteService: ClienteService, 
    private router: Router) { }

  ngOnInit(): void {
 
  }

  createCliente(): void {
    this.ClienteService.create(this.cliente).subscribe(()=>{
    this.ClienteService.showMessage('Cliente adicionado com sucesso')
    this.router.navigate(['cliente'])
  })
}

  cancel(): void {
    this.router.navigate(['cliente'])
  }



  
}
