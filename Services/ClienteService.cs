using INFRA.BackEnd.Repositorio;
using INFRA.Entidades;
using System;
using System.Collections.Generic;

namespace Services {
    public class ClienteService {
        private readonly ClienteRepositorio _clienteRepositorio;

     

        public ClienteService(ClienteRepositorio clienteRepositorio) {
            _clienteRepositorio = clienteRepositorio;

        }

        public void Cadastro(Cliente cli) {
            _clienteRepositorio.Cadastro(cli);

        }
        
        public Cliente Buscar(int id) {
            return _clienteRepositorio.Buscar(id);
        }
    
        public  List<Cliente> Listar() {
            return _clienteRepositorio.Listar();
        }

        public void Delete (int id) {
            _clienteRepositorio.Deletar(id);

        }

        public void Editar(Cliente cliNovo) {
            _clienteRepositorio.Editar(cliNovo);
        }

    }

}
