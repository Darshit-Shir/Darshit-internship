using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ThemePractice.Models;
using ThemePractice.DBConnection;
using ThemePractice.DBOperations;
using ThemePractice.Controllers;

namespace ThemePractice.Controllers
{
    public class RegionController : Controller
    {
        DarshitEntities entity = new DarshitEntities();
        RegionRepository repo = new RegionRepository();

        public RegionController()
        {
            repo = new RegionRepository();
        }
        // GET: Region

        // Add country
        public ActionResult AddCountry()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddCountry(CountryModel model)
        {
            if (ModelState.IsValid)
            {
                if(entity.Country.Any(x => x.CountryName.ToLower() == model.CountryName.ToLower()))
                {
                    ViewBag.CountryError = "Country already exist";
                    return View();
                }
                else
                {
                    int id = repo.AddCountry(model);
                    if (id > 0)
                    {
                        ModelState.Clear();
                        ViewBag.Issuccess = "Country Added successfully";
                        return RedirectToAction("AddCountry","Region");
                    }
                }
            }
            return View();
        }

        // Add state
        public ActionResult AddState()
        {
            HomeController controller = new HomeController();
            ViewBag.CountryList = new SelectList(controller.GetCountryList(), "CId", "CountryName");
            return View();
        }

        [HttpPost]
        public ActionResult AddState(StatesModel model)
        {
            if (ModelState.IsValid)
            {
                if(entity.States.Any(x => x.StateName.ToLower() == model.StateName.ToLower()))
                {
                    TempData["Error"] = "State already exist";
                    return RedirectToAction("AddState","Region");
                }
                else
                {
                    int id = repo.AddState(model);
                    if (id > 0)
                    {
                        ModelState.Clear();
                        ViewBag.Issuccess = "State Added successfully";
                        return RedirectToAction("AddState", "Region");
                    }
                }
            }
            return RedirectToAction("AddState", "Region");
        }

        //Add City
        public ActionResult AddCity()
        {
            HomeController controller = new HomeController();
            ViewBag.CountryList = new SelectList(controller.GetCountryList(), "CId", "CountryName");
            return View();
        }

        [HttpPost]
        public ActionResult AddCity(CityModel model)
        {
            if(entity.City.Any(x => x.CityName.ToLower() == model.CityName.ToLower()))
            {
                TempData["Error"] = "City already exist";
                return RedirectToAction("AddCity");
            }
            else
            {
                int id = repo.AddCity(model);
                if (id > 0)
                {
                    ModelState.Clear();
                    ViewBag.Issuccess = "City Added successfully";
                    return RedirectToAction("AddCity");
                }
            }
            return View();
        }
    }
}