using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MyAppModels;
using MyAppDb.DbOperations;

namespace DBConnection.Controllers
{
    public class HomeController : Controller
    {
        EmployeeRepository repository = null;

        public HomeController()
        {
            repository = new EmployeeRepository();
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(EmployeeModel model)
        {
            if (ModelState.IsValid)
            {
                int id = repository.AddEmployee(model);
                if (id > 0)
                {
                    ModelState.Clear();
                    ViewBag.Issuccess = "Data Added Successfully";
                }

            }
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}