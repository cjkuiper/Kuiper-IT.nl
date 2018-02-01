using System;
using System.Collections.Generic;
using System.Linq;
using Kuiper_IT.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Kuiper_IT.Controllers
{
    [Produces("application/json")]
    [EnableCors(policyName: "Angular")]
    public class DataController : Controller
    {
        private readonly List<Project> Projects = new List<Project> {
          new Project { Id = 1, CustomerName = "KPN", StartDate = new DateTime(2016, 09, 01), Name = "Doorontwikkeling 112", Role = "Software Engineer / Team lead" },
          new Project { Id = 2, CustomerName = "KPN", StartDate = new DateTime(2016, 08, 31), EndDate = new DateTime(2016,08,01), Name = "Realtime dashboard", Role = "Software Engineer" },
          new Project { Id = 3, CustomerName = "MSI-ACI", StartDate = new DateTime(2015, 07, 30), EndDate = new DateTime(2016,07,31),Name = "FlexTrack" },
          new Project { Id = 4, CustomerName = "MSI-ACI", StartDate = new DateTime(2015, 06, 30), EndDate = new DateTime(2014,10,01),Name = "Cor5" },
          new Project { Id = 5, CustomerName = "Asito", StartDate = new DateTime(2012, 09, 01), EndDate = new DateTime(2014,09,30) ,Name = "Project 1220" },
          new Project { Id = 6, CustomerName = "Alfam Consumer Finance", StartDate = new DateTime(2012, 08, 31), EndDate = new DateTime(2007,01,01),Name = "Verschillende projecten" }
        };
  
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
    }
}
