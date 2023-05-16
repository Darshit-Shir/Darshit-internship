using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Repositories.Repository
{
    public interface ILoginRepository
    {
        int LoginUser(LoginModel model);
        IEnumerable GetUserName(LoginModel model);
    }
}
