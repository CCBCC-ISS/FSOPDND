using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FSOPDND.Startup))]
namespace FSOPDND
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
