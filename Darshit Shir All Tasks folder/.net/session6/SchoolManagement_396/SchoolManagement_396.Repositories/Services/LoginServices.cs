using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Repositories.Repository;

namespace SchoolManagement_396.Repositories.Services
{
    public class LoginServices : ILoginRepository
    {
        SchoolMgmtEntities entity = new SchoolMgmtEntities();

        public int LoginUser(LoginModel model)
        {
            if (entity.credential.Any(x => x.Email == model.Email))
            {
                if (entity.credential.Any(x => x.Email == model.Email && x.Password == model.Password))
                {
                    return 1;
                }
                else
                {
                    return 0;
                }
            }
            else
            {
                return -1;
            }
        }

        public IEnumerable GetUserName(LoginModel model)
        {
            SchoolMgmtEntities entity = new SchoolMgmtEntities();
            List<credential> credentials = entity.credential.ToList();
            var UserName = from u in credentials
                        where u.Email == model.Email
                        select new { u.firstName,u.lastName};
            string UName = "";
            foreach (var u in UserName)
            {
                UName = u.firstName + " "+ u.lastName;
            }

            return UName;
        }
    }
}
