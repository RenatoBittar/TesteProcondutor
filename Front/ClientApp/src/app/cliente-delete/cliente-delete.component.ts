import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

 
  cliente: Cliente = {
    id:+'',
    nome: '',
    email: '',
    cidade:'',
  
   
  }

  constructor(
    private clienteService: ClienteService, 
    private router: Router,
    private route: ActivatedRoute,
    private MatFormFieldModule:MatFormFieldModule
    
    ) { }

  ngOnInit():void {
    const id= + this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(id).subscribe(cliente => {
      this.cliente = cliente
    })
  }
  
  deleteCliente(): void {
    this.clienteService.delete(this.cliente.id).subscribe(()=>{
      this.clienteService.showMessage("Cliente excluido com sucesso")
      this.router.navigate(["cliente"])
    })


  }

  cancel(): void {
    this.router.navigate(['cliente'])
  }
}
