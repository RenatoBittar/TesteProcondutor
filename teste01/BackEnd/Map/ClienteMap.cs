using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity.ModelConfiguration;
using INFRA.Entidades;

namespace INFRA.Map {
    class ClienteMap : EntityTypeConfiguration<Cliente> {
        public ClienteMap() {
            this.ToTable("TB_CLIENTE");
            this.HasKey(c => c.Id);
            this.Property(c => c.Nome).HasColumnName("NOME");
            this.Property(c => c.Email).HasColumnName("EMAIL");
            this.Property(c => c.Cidade).HasColumnName("CIDADE"); 
        }
    }
}

