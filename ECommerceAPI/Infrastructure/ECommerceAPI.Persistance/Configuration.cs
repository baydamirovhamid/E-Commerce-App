using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Persistence
{
    static class Configuration
    {
        static public string ConnectionString
        {
            get
            {
                ConfigurationManager configurationManager = new();
                configurationManager.SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "C:\\Users\\99470\\Desktop\\E-Commerce App\\ECommerceAPI\\Presentation\\ECommerceAPI.API"));
                configurationManager.AddJsonFile("appsettings.json");

                var connectionString = configurationManager.GetConnectionString("PostgreSQL");

                return connectionString;
            }
        }
    }
}
