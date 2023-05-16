using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Helpers.Helpers
{
    public class TeacherHelper
    {
        public static teacher ConvertToTeacherModel(TeacherModel model)
        {
            return new teacher
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Address = model.Address,
                MobileNo = model.MobileNo,
                Subjects = model.Subjects
            };
        }
    }
}
