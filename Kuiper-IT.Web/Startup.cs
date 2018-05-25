using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.AzureAppServices;

namespace Kuiper_IT
{
    public class Startup
    {
        private readonly IHostingEnvironment _env;
        private ILogger _logger;

        public Startup(ILoggerFactory loggerFactory, IHostingEnvironment env)
        {
            _env = env;
            _logger = loggerFactory.CreateLogger<Startup>();

            var builder = new ConfigurationBuilder()
             .SetBasePath(env.ContentRootPath)
             .AddEnvironmentVariables()
             .AddEnvironmentVariables(prefix: "ASPNETCORE_")
             .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
             .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);
      
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
            _logger.LogInformation($"Configure started for environment: {_env.EnvironmentName}");
            loggerFactory.AddAzureWebAppDiagnostics(new AzureAppServicesDiagnosticsSettings
            {
              OutputTemplate = "{Timestamp:yyyy-MM-dd HH:mm:ss zzz} [{Level}] {RequestId}-{SourceContext}: {Message}{NewLine}{Exception}"
            });

            if (_env.IsDevelopment())
            {
              loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            }
            loggerFactory.AddDebug();
            
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
                  //spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                }                
              }
           );      
        }
    }
}
