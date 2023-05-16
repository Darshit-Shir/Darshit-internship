using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DatabaseConnection.Models;
using DatabaseConnection.Context;

namespace DatabaseConnection.Controllers
{
    public class HomeController : Controller
    {

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
        AddUser user = null;
        public HomeController()
        {
            user = new AddUser();
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(UserTable model)
        {
            if (ModelState.IsValid)
            {
                int id = user.addUser(model);
                if (id > 0)
                {
                    ModelState.Clear();
                    ViewBag.Issuccess = "Data Added";
                }
            }
            return View();
        }
    }
}