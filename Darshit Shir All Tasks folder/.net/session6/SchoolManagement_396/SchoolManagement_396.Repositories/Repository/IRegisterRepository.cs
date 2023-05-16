using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models;

namespace SchoolManagement_396.Repositories.Repository
{
    public interface IRegisterRepository
    {
        bool AddUser(RegisterModel model);
    }
}
