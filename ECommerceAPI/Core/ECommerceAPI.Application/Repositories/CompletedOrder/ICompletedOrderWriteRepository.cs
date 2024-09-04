using ECommerceAPI.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ECommerceAPI.Application.Repositories
{
    public interface ICompletedOrderWriteRepository : IWriteRepository<CompletedOrder>
    {
    }
}
