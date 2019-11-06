using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kuiper_IT.Data;
using Kuiper_IT.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace Kuiper_IT.Controllers
{
  [Produces("application/json")]
  [EnableCors(policyName: "Angular")]
  public class DataController : Controller
  {
    private IConfiguration _configuration;
    private readonly ILogger _logger;
    private readonly IHostingEnvironment _env;

    private readonly List<Project> Projects = new List<Project> {
          new Project { Id = 1, CustomerName = "ABN Amro Hypotheken", StartDate = new DateTime(2018, 08, 01), Name = "Brondata door de keten", Role = "Software Engineer" },
          new Project { Id = 1, CustomerName = "VGZ", StartDate = new DateTime(2018, 05, 01), EndDate = new DateTime(2018, 07,31), Name = "Bouw Zakelijke Portalen", Role = "Software Engineer" },
          new Project { Id = 1, CustomerName = "KPN", StartDate = new DateTime(2016, 08, 01), EndDate = new DateTime(2018, 04,30), Name = "Doorontwikkeling 112", Role = "Software Engineer / Team lead" },
          new Project { Id = 4, CustomerName = "MSI-ACI", StartDate = new DateTime(2015, 06, 30), EndDate = new DateTime(2016,07,31),Name = "FlexTrack" },
          new Project { Id = 5, CustomerName = "Asito", StartDate = new DateTime(2012, 09, 01), EndDate = new DateTime(2014,09,30) ,Name = "Project 1220" },
          new Project { Id = 6, CustomerName = "Alfam Consumer Finance", StartDate = new DateTime(2012, 08, 31), EndDate = new DateTime(2007,01,01),Name = "Verschillende projecten" }
        };

    public DataController(IConfiguration configuration, ILogger<DataController> logger, IHostingEnvironment env)
    {
      _configuration = configuration;
      _logger = logger;
      _env = env;
    }

    [HttpGet]
    [Route("api/Data/Environment")]
    public string GetEnvironment()
    {
      return _env.EnvironmentName;
    }

    [HttpGet]
    [Route("api/Data/Projects")]
    public List<Project> GetProjects()
    {
      return Projects;
    }

    [HttpGet]
    [Route("api/Data/Project/{id}")]
    public Project GetProject(int id)
    {
      return Projects.FirstOrDefault(p => p.Id == id);
    }

    [HttpPost]
    [Route("api/Data/SendContactRequest")]
    public async Task<bool> SendContactRequest([FromBody] ContactRequest contactRequest)
    {
      _logger.LogInformation($"SendContactRequest: from: {contactRequest.Email}, message: {contactRequest.Message}");
      try
      {        
        var client = new SendGridClient(_configuration["Authentication:SendGrid:ApiKey"]);
        var msg = new SendGridMessage();

        msg.SetFrom(new EmailAddress(contactRequest.Email ?? "noreply@kuiper-it.nl", "Kuiper-IT"));

        var recipients = new List<EmailAddress>
            {
                new EmailAddress("jeroen@kuiper-it.nl", "Jeroen Kuiper")
            };
        msg.AddTos(recipients);

        msg.SetSubject("Contactbericht via www.kuiper-it.nl");

        msg.AddContent(MimeType.Text, $"Naam: {contactRequest.Name} \r\n" +
                                      $"Telefoonnummer: {contactRequest.PhoneNumber} \r\n" +
                                      $"Email: {contactRequest.Email} \r\n" +
                                      $"Onderwerp: {contactRequest.Subject} \r\n" +
                                      $"Bericht: {contactRequest.Message} \r\n");
        msg.AddContent(MimeType.Html, $"Naam: {contactRequest.Name} </br>" +
                                      $"Telefoonnummer: {contactRequest.PhoneNumber} </br>" +
                                      $"Email: {contactRequest.Email} </br>" +
                                      $"Onderwerp: {contactRequest.Subject} </br>" +
                                      $"Bericht: {contactRequest.Message} </br>");
        var response = await client.SendEmailAsync(msg);
        return response.StatusCode == System.Net.HttpStatusCode.Accepted;
      }
      catch (Exception ex)
      {
        _logger.LogError($"SendContactRequest failed", ex);
        return false;
      }      
    }
  }
}
