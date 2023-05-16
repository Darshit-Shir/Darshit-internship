using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Helpers.Helpers
{
    public class StatesHelper
    {
        public static States ConverToStatesModel(StatesModel model)
        {
            return new States
            {
                StateName = model.StateName,
                CountryId = model.CountryId
            };
        }
    }
}
