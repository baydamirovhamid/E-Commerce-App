using ECommerceAPI.Application.ViewModels.Baskets;
using ECommerceAPI.Domain.Entities;

namespace ECommerceAPI.Application.Abstractions.Services
{
    public interface IBasketService
    {
        public Task<List<BasketItem>> GetBasketItemsAsync();

        public Task AddItemToBasketAsync(VM_Create_BasketItem basketItem);

        public Task UpdateQuantityAsync(VM_Update_BasketItem basketItem);
        public Task RemoveBasketItemAsync(string basketItemId);
    }
}
