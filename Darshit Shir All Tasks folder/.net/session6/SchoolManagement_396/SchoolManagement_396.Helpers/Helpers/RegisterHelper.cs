using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models;
using SchoolManagement_396.Models.Contex;


namespace SchoolManagement_396.Helpers.Helpers
{
    public class RegisterHelper
    {
        public static credential ConvertToRegisterModel(RegisterModel model)
        {
            return new credential
            {
                firstName = model.FirstName,
                lastName = model.LastName,
                Email = model.Email,
                Password = model.Password
            };
        }
    }
}
