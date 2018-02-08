using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Kuiper_IT
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {            
            var builder = new ConfigurationBuilder()
               .SetBasePath(env.ContentRootPath)
               .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
               .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
               .AddEnvironmentVariables("APPSETTING_");
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(Configuration);
            services.AddCors(options =>
            {
              options.AddPolicy("Angular",
                  builder => builder.WithOrigins("*"));
            });
            
            services.AddSpaStaticFiles(configuration =>
            {
              configuration.RootPath = "wwwroot";
            });
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddAzureWebAppDiagnostics();
            loggerFactory.AddConsole();

            app.UseCors("Angular");
            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseSpaStaticFiles();
            app.UseStaticFiles();

            app.UseSpa(
              (spa) =>
              {
                spa.Options.SourcePath = "ClientApp";
                if (env.IsDevelopment())
                {
                  spa.UseAngularCliServer(npmScript: "start");
                }
                else
                {
                  spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                }
              }
           );      
        }
    }
}
