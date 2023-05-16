using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Helpers.Helpers
{
    public class CountryHelper
    {
        public static Country ConvertToCountryModel(CountryModel model)
        {
            return new Country
            {
                CountryName = model.CountryName
            };
        }
    }
}
