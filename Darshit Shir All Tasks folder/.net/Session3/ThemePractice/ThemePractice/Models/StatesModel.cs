using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ThemePractice.Models
{
    public class StatesModel
    {
        public int id { get; set; }
        public string StateName { get; set; }
        public int CountryId { get; set; }

        public virtual CountryModel Country { get; set; }
    }
}