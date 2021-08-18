namespace INFRA.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class banco : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TB_CLIENTE",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        NOME = c.String(),
                        EMAIL = c.String(),
                        CIDADE = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.TB_CLIENTE");
        }
    }
}
