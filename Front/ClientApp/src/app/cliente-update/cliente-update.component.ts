import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';


@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

 
  cliente: Cliente = {
    id:+'',
    nome: '',
    email: '',
    cidade:'',
  }

  constructor(private clienteService: ClienteService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.clienteService.readById(id).subscribe(cliente =>{
      this.cliente = cliente
    })
  }


  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(()=>{
      this.clienteService.showMessage("Cliente atualizado");
      this.router.navigate(["cliente"]);
    })
  }

  cancel(): void {
    this.router.navigate(['cliente']);
  }

}
