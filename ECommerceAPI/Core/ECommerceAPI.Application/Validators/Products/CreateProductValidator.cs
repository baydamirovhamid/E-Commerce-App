using ECommerceAPI.Application.ViewModels.Products;
using FluentValidation;

namespace ECommerceAPI.Application.Validators.Products
{
    public class CreateProductValidator: AbstractValidator<VM_Create_Product>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Please do not empty the product name.")
                .MaximumLength(150)
                .MinimumLength(5)
                    .WithMessage("Please enter the product name between 5 and 150 characters");

            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Please do not empty the stock name.")
                .Must(s => s >= 0)
                    .WithMessage("The stock count will not be negative!");

            RuleFor(p => p.Price)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Please do not empty the price name.")
                .Must(s => s >= 0)
                    .WithMessage("The price count will not be negative!");
        }
    }
}
