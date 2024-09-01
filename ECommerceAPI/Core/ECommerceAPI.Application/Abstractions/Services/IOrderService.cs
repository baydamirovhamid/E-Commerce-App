using ECommerceAPI.Application.DTOs.Order;
using ECommerceAPI.Application.Features.Commands.Order.CreateOrder;

namespace ECommerceAPI.Application.Abstractions.Services
{
    public interface IOrderService
    {
        Task CreateOrderAsync(CreateOrderDto createOrder); 
    }
}
