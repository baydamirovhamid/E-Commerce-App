using ECommerceAPI.Application.Repositories;
using ECommerceAPI.Domain.Entities;
using ECommerceAPI.Persistence.Contexts;
using ECommerceAPI.Persistence.Repositories;

namespace ECommerceAPI.Persistence.Repositories.Product
{
    public class ProductReadRepository : ReadRepository<ECommerceAPI.Domain.Entities.Product>, IProductReadRepository
    {
        public ProductReadRepository(ECommerceAPIDbContext context) : base(context)
        {
        }
    }
}
