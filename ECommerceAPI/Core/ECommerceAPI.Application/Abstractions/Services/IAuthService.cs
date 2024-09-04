using ECommerceAPI.Application.Abstractions.Services.Authentications;

namespace ECommerceAPI.Application.Abstractions.Services
{
    public interface IAuthService: IExternalAuthentication, IInternalAuthentication
    {
        Task PasswordResetAsync(string email);
        Task<bool> VerifyResetTokenAsync(string resetToken, string userId);
    }
}
