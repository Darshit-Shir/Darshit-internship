using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Helpers.Helpers
{
    public class CityHelper
    {
        public static City ConvertToCityModel(CityModel model)
        {
            return new City
            {
                CityName = model.CityName,
                CountryId = model.CountryId,
                StateId = model.StateId
            };
        }
    }
}
