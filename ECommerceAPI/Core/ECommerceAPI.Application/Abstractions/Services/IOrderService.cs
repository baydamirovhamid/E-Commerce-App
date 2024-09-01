﻿using ECommerceAPI.Application.DTOs.Order;

namespace ECommerceAPI.Application.Abstractions.Services
{
    public interface IOrderService
    {
        Task CreateOrderAsync(CreateOrderDto createOrder);
        Task<ListOrderDto> GetAllOrdersAsync(int page, int size);

    }
}
