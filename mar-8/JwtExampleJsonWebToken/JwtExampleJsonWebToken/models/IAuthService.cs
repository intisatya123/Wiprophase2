namespace JwtExampleJsonWebToken.models
{
    public interface IAuthService
    {
        Task<string> Authenticate(string username, string password);
    }
}
