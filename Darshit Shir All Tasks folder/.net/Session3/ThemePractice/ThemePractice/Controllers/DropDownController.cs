using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ThemePractice.Models;
using ThemePractice.DBConnection;
using ThemePractice.DBOperations;

namespace ThemePractice.Controllers
{
    public class DropDownController : Controller
    {
        // GET: DropDown
        public ActionResult Country()
        {
            DarshitEntities entity = new DarshitEntities();
            ViewBag.CountryList = new SelectList(GetCountries(), "id", "CountryName");
            return View();
        }

        public List<Country> GetCountries()
        {
            DarshitEntities entity = new DarshitEntities();
            List<Country> country = entity.Country.ToList();
            return country;
        }

        public ActionResult GetStates(int id)
        {
            DarshitEntities entity = new DarshitEntities();
            List<States> selectList = entity.States.Where(x => x.id == id).ToList();
            ViewBag.StateList = new SelectList(selectList, "id", "StateName");
            return PartialView("DisplayStates");

        }

    }
}