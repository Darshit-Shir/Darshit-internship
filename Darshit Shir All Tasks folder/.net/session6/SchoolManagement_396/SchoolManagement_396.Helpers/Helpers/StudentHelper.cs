using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Helpers.Helpers
{
    public class StudentHelper
    {
        public static Student ConvertToStudentModel(StudentModel model)
        {
            return new Student
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Address = model.Address,
                MobileNo = model.MobileNo,
                CountryId = model.CountryId,
                StateId = model.StateId,
                CityId = model.CityId,
                TeacherId = model.TeacherId
            };
        }


    }
}
