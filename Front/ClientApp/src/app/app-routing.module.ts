import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteCrudComponent } from './cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';


const routes: Routes = [
  {
    path:"",
    component : HomeComponent
  },
  {
    path: "cliente",
    component: ClienteCrudComponent
  },
  {
    path: "cliente/create",
    component: ClienteCreateComponent
  },
  {
    path: "cliente/delete/:id",
    component: ClienteDeleteComponent
  },
  {
    path: "cliente/update/:id",
    component: ClienteUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
