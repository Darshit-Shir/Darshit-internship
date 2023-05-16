using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class User
    {
        public string Name { get; set; }

        public string mobileNo { get; set; }
    }
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            TempData["name"] = "Darshit";

            List<User> myList = new List<User>
            {
                new User{ Name  = "Darshit", mobileNo = "4545562312" },
                new User{ Name  = "Nil", mobileNo = "9995562312" },
                new User{ Name  = "Vatsal", mobileNo = "8845562312" }
            };

            TempData["user"] = myList;
            return View();
        }

        public ActionResult About()
        {
            string name;
            if (TempData.ContainsKey("name"))
                name = TempData["name"].ToString();
                TempData.Keep();

            //ViewBag.Message = "Your application description page.";
            ViewBag.Message = "Itna to dekh liya or kitna dekhna hai.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult MoreInfo()
        {
            ViewBag.Message = "Your application info";
            ViewBag.user = TempData["user"];
            TempData.Keep();

            return View();
        }
    }
}