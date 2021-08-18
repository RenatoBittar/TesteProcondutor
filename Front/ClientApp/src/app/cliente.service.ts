import { Cliente } from './cliente.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatInputModule } from '@angular/material';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ClienteService {

  baseUrl = "https://localhost:44310/api/Clientes"

  

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  

  showMessage(msg: string): void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  read():Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  readById(id : number): Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }

  update(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/update`;
        return this.http.post<Cliente>(url, cliente);
  }

  delete(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',"Access-Control-Allow-Methods": "DELETE"
        
      })
    };
    return this.http.post<Cliente>(url,httpOptions);
    


  }

}

