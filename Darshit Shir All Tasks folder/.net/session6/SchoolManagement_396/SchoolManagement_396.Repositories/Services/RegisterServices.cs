using SchoolManagement_396.Models;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Repositories.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Helpers.Helpers;

namespace SchoolManagement_396.Repositories.Services
{
    public class RegisterServices : IRegisterRepository
    {
        SchoolMgmtEntities entity = new SchoolMgmtEntities();

        public bool AddUser(RegisterModel model)
        {
            if (entity.credential.Any((x) => x.Email == model.Email))
            {
                return false;
            }
            else
            {
                entity.credential.Add(RegisterHelper.ConvertToRegisterModel(model));
                entity.SaveChanges();
                return true;
            }
        }
    }
}
