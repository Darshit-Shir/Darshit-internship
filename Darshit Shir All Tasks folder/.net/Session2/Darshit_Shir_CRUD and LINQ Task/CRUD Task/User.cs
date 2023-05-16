using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD_Task
{
    public class User
    {
        public int Id;
        public string UserName;
        public int MobileNo;
        public int CompanyId;

        public User(int Id,string UserName, int MobileNo, int CompanyId)
        {
            this.Id = Id;
            this.UserName = UserName;
            this.MobileNo = MobileNo;
            this.CompanyId = CompanyId;
        }
    }
}
