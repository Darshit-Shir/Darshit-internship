using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PracticeMVC.Controllers
{
    public class EmployeeController : Controller
    {
        public string EmployeeProfile(int id,int? DeptID=null)
        {
            return "id = " + id + "Department = " + DeptID;
        }
    }
}