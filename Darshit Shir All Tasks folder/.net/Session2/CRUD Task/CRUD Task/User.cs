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

        public User(int Id,string UserName, int MobileNo)
        {
            this.Id = Id;
            this.UserName = UserName;
            this.MobileNo = MobileNo;
        }
    }
}
