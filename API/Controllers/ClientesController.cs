using INFRA.Entidades;
using Microsoft.AspNetCore.Mvc;
using Services;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase {
        private readonly ClienteService _clienteService;

        public ClientesController(ClienteService clienteService) {
            _clienteService = clienteService;

        }
        // GET: api/<ClientesController>
        [HttpGet]
        public IEnumerable<Cliente> Get() {
            return _clienteService.Listar() ;
        }

        // GET api/<ClientesController>/5
        [HttpGet("{id}")]
        public Cliente Get(int id) {
            
           var ret = _clienteService.Buscar(id);
            return ret;
        }

        // POST api/<ClientesController>
        [HttpPost]
        public bool Post([FromBody] Cliente cliente) {
             _clienteService.Cadastro(cliente);
            return true;
        }

        // PUT api/<ClientesController>/5
        [HttpPost ("update")]
        public void Put([FromBody] Cliente cliNovo) {
            _clienteService.Editar(cliNovo);
        }

        // DELETE api/<ClientesController>/5
        [HttpPost("{id}")]
        public void Delete(int id) {
            _clienteService.Delete(id);
        }
    }
}
