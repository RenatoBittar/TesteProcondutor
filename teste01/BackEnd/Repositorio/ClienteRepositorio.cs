using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using INFRA.Entidades;
using INFRA.Db;


namespace INFRA.BackEnd.Repositorio {
    public class ClienteRepositorio {
        public void Cadastro(Cliente cli) {
            using(var ctx = new ControllersContext()) {
                ctx.Clientes.Add(cli);
                ctx.SaveChanges();
            }

        }


        public Cliente Buscar(int id) {
            Cliente cliente = new Cliente();
            using(var ctx = new ControllersContext()) {
                cliente = ctx.Clientes.Find(id);
            }
            return cliente;
        }

        public List<Cliente> Listar() {
            using(var ctx = new ControllersContext()) {
                var Clientes = (from cli in ctx.Clientes select cli).OrderBy(x => x.Nome).ToList();
                return Clientes;
            }

        }

        public void Deletar(int id) {
            using(var ctx = new ControllersContext()) {
                Cliente cli = ctx.Clientes.Find(id);
                ctx.Clientes.Remove(cli);
                ctx.SaveChanges();
            }
        }

        public void Editar(Cliente cliNovo) {
            using(var ctx = new ControllersContext()) {
                Cliente cliAntigo = ctx.Clientes.Find(cliNovo.Id);
                cliAntigo.Nome = cliNovo.Nome;
                cliAntigo.Email = cliNovo.Email;
                cliAntigo.Cidade = cliNovo.Cidade;
                ctx.SaveChanges();
            }
        }
    }
}
