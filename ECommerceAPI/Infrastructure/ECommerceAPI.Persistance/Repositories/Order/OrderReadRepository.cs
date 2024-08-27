using ECommerceAPI.Application.Repositories;
using ECommerceAPI.Domain.Entities;
using ECommerceAPI.Persistence.Contexts;
using ECommerceAPI.Persistence.Repositories;

namespace ECommerceAPI.Persistence.Repositories.Order
{
    public class OrderReadRepository : ReadRepository<ECommerceAPI.Domain.Entities.Order>, IOrderReadRepository
    {
        public OrderReadRepository(ECommerceAPIDbContext context) : base(context)
        {
        }
    }
}
