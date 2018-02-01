using System;
using System.Collections.Generic;

namespace Kuiper_IT.Data
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CustomerName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Role { get; set; }
        public string Description { get; set; }
        public List<string> Techniques { get; set; }



    }
}
