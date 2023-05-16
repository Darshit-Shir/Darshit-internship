using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ThemePractice.Models
{
    public class CityModel
    {
        public int id { get; set; }
        public string CityName { get; set; }
        public int? CountryId { get; set; }
        public int? StateId { get; set; }

        public virtual CountryModel Country { get; set; }
        public virtual StatesModel States { get; set; }
    }
}