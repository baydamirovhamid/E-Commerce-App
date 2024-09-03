using ECommerceAPI.Application.Abstractions.Services;
using ECommerceAPI.Application.Features.Commands.AppUser.CreateUser;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        readonly IMediator _mediator;
        readonly IMailService _mailService;


        public UsersController(IMediator mediator, IMailService mailService)
        {
            _mediator = mediator;
            _mailService = mailService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateUserCommandRequest createUserCommandRequest)
        {
            CreateUserCommandResponse response = await _mediator.Send(createUserCommandRequest);
            return Ok(response);
        }

        [HttpGet]
        public async Task<IActionResult> ExampleMailTest()
        {
            await _mailService.SendMessageAsync("b.hamidd999@gmail.com", "Test Mail", "<strong>This is test email.</strong>");
            return Ok();
        }
    }
}
