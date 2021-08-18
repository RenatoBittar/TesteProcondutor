using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using INFRA.Map;
using INFRA.Entidades;

namespace INFRA.Db {
    class ControllersContext : DbContext {
        public ControllersContext() : base("Server=DESKTOP-1NFUKKA\\SQLEXPRESS;DataBase=Sistemateste01;Integrated Security=true; ") {

        }

        public DbSet<Cliente> Clientes{get; set;}
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder) {
            Database.SetInitializer<ControllersContext>(null);
            modelBuilder.Configurations.Add(new ClienteMap());
            base.OnModelCreating(modelBuilder);
        }
    }
    
    
}
