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
        private readonly IHostingEnvironment _env;

        public Startup(IHostingEnvironment env)
        {
            _env = env;

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

            if (_env.IsDevelopment())
            {
              services.AddCors(options =>
              {
                options.AddPolicy("Angular", builder => builder.WithOrigins("*"));
              });
            }            
            
            services.AddSpaStaticFiles(configuration =>
            {
              configuration.RootPath = "wwwroot";
            });
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddAzureWebAppDiagnostics();
            loggerFactory.AddConsole();

            if (_env.IsDevelopment())
            {
              app.UseCors("Angular");
            }
      
            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseSpaStaticFiles();
            app.UseStaticFiles();

            // allow entering routes in addressbar. If page not found and no API call, rewrite to Index
            app.Use(async (context, next) => {
              await next();
              if (context.Response.StatusCode == 404 &&
                 !Path.HasExtension(context.Request.Path.Value) &&
                 !context.Request.Path.Value.StartsWith("/api/"))
              {
                context.Request.Path = "/index.html";
                await next();
              }
            });

            app.UseSpa(
              (spa) =>
              {
                spa.Options.SourcePath = "ClientApp";
                if (_env.IsDevelopment())
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
