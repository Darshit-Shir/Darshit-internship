using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PracticeProject.Repositories.Repository;

namespace PracticeProject.Controllers
{
    public class EmployeeController : Controller
    {
        IEmployeeRepository Emp;

        public EmployeeController(IEmployeeRepository _Emp)
        {
            Emp = _Emp;
        }

        // GET: Employee
        public ActionResult ShowEmployee()
        {
            return View(Emp.GetEmployeeList());
        }
    }
}