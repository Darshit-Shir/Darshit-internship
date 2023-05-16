using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PracticeProject.Models.Context;
using PracticeProject.Models.Model;

namespace PracticeProject.Helpers.Helpers
{
    public class EmployeeHelper
    {
        public static Employee BindTo(EmployeeModel model)
        {
            return new Employee
            {
                EName = model.EName,
                Email = model.Email,
                Gender = model.Gender,
                JoiningDate = model.JoiningDate,
                CountryId = model.CountryId,
                StateId = model.StateId,
                CityId = model.CityId,
                SkillId = model.SkillId
            };
        }
    }
}
