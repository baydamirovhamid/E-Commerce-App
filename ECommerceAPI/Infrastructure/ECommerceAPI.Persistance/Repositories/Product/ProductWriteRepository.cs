using ECommerceAPI.Application.Repositories;
using ECommerceAPI.Domain.Entities;
using ECommerceAPI.Persistence.Contexts;
using ECommerceAPI.Persistence.Repositories;

namespace ECommerceAPI.Persistence.Repositories.Product
{
    public class ProductWriteRepository : WriteRepository<ECommerceAPI.Domain.Entities.Product>, IProductWriteRepository
    {
        public ProductWriteRepository(ECommerceAPIDbContext context) : base(context)
        {
        }
    }

}
