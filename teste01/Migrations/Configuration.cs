namespace INFRA.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

internal sealed class Configuration : DbMigrationsConfiguration<INFRA.Db.ControllersContext> {
    public Configuration() {
        AutomaticMigrationsEnabled = false;
    }

    protected override void Seed(INFRA.Db.ControllersContext context) {
        //  This method will be called after migrating to the latest version.

        //  You can use the DbSet<T>.AddOrUpdate() helper extension method
        //  to avoid creating duplicate seed data.
    }
}
}
