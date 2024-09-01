using ECommerceAPI.Domain.Entities.Common;

namespace ECommerceAPI.Domain.Entities
{
    public class Order: BaseEntity
    {
        //public Guid CustomerId { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public Basket Basket { get; set; }
        public string OrderCode { get; set; }
        //public ICollection<Product> Products { get; set; }
        //public Customer Customer { get; set; }
    }
}
