using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;
using SchoolManagement_396.Repositories.Repository;


namespace SchoolManagement_396.Controllers
{
    public class RegionController : Controller
    {

        ICountryRepository Country;
        IStatesRepository State;
        ICityRepository City;

        public RegionController(ICountryRepository _country, IStatesRepository _state, ICityRepository _city)
        {
            Country = _country;
            State = _state;
            City = _city;
        }
        // GET: Region
        public ActionResult ShowCountry()
        {
            return View(Country.GetCountryList());
        }

        public ActionResult AddCountry()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddCountry(CountryModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    int IsCheck = Country.AddCountry(model);
                    if (IsCheck == 1)
                    {
                        ModelState.Clear();
                        ViewBag.Issuccess = "Country Added successfully";
                        return RedirectToAction("AddCountry", "Region");
                    }
                    else
                    {
                        ModelState.Clear();
                        ViewBag.CountryError = "Country already exist";
                        return View();
                    }
                }
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ActionResult EditCountry(int id)
        {
            CountryModel countryEdit = new CountryModel
            {
                CountryName = Country.GetCountryById(id).CountryName
            };
            return View(countryEdit);
        }

        [HttpPost]
        public ActionResult EditCountry(int id, CountryModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Country.EditCountry(id, model);
                    return RedirectToAction("ShowCountry");
                }
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ActionResult DeleteCountry(int id)
        {
            try
            {
                Country.DeleteCountry(id);
                return RedirectToAction("ShowCountry", "Region");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public JsonResult Statelist(int CountryId)
        {
            List<States> st = State.GetStatesList();
            var obj = from a in st.Where(x => x.CountryId == CountryId).ToList() select new { StateName = a.StateName, StateId = a.SId };
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Citylist(int StateId)
        {
            List<City> st = City.GetCityList();
            var obj = from a in st.Where(x => x.StateId == StateId).ToList() select new { cityName = a.CityName, CityId = a.CityId };
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        // state
        public ActionResult ShowStates()
        {
            return View(State.GetStatesList());
        }

        public ActionResult AddStates()
        {
            ViewBag.CountryList = new SelectList(Country.GetCountryList(), "CId", "CountryName");
            return View();
        }

        [HttpPost]
        public ActionResult AddStates(StatesModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    int IsCheck = State.AddStates(model);
                    if (IsCheck == 1)
                    {
                        ModelState.Clear();
                        ViewBag.Issuccess = "State Added successfully";
                        return RedirectToAction("AddStates", "Region");
                    }
                    else
                    {
                        TempData["Error"] = "State already exist";
                        return RedirectToAction("AddStates", "Region");
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return RedirectToAction("AddStates", "Region");
        }

        public ActionResult EditState(int id)
        {
            ViewBag.CountryList = new SelectList(Country.GetCountryList(), "CId", "CountryName");
            StatesModel StateEdit = new StatesModel
            {
                StateName = State.GetStatesListById(id).StateName,
                CountryId = State.GetStatesListById(id).CountryId
            };
            return View(StateEdit);
        }

        [HttpPost]
        public ActionResult EditState(int id, StatesModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    State.EditStates(id, model);
                    return RedirectToAction("ShowStates");
                }
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ActionResult DeleteState(int id)
        {
            try
            {
                State.DeleteStates(id);
                return RedirectToAction("ShowStates");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // City
        public ActionResult ShowCity()
        {
            return View(City.GetCityList());
        }

        public ActionResult AddCity()
        {
            ViewBag.CountryList = new SelectList(Country.GetCountryList(), "CId", "CountryName");
            return View();
        }

        [HttpPost]
        public ActionResult AddCity(CityModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    int IsCheck = City.AddCity(model);
                    if (IsCheck == 1)
                    {
                        ModelState.Clear();
                        ViewBag.Issuccess = "State Added successfully";
                        return RedirectToAction("AddCity", "Region");
                    }
                    else
                    {
                        TempData["Error"] = "City already exist";
                        return RedirectToAction("AddCity", "Region");
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return RedirectToAction("AddCity", "Region");
        }

        public ActionResult Editcity(int id)
        {
            ViewBag.CountryList = new SelectList(Country.GetCountryList(), "CId", "CountryName");
            ViewBag.StatesList = new SelectList(State.GetStatesList(), "SId", "StateName");
            CityModel CityEdit = new CityModel
            {
                CityName = City.GetCityListById(id).CityName,
                CountryId = City.GetCityListById(id).CountryId,
                StateId = City.GetCityListById(id).StateId
            };
            return View(CityEdit);
        }

        [HttpPost]
        public ActionResult EditCity(int id, CityModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    City.EditCity(id, model);
                    return RedirectToAction("ShowCity");
                }
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public ActionResult DeleteCity(int id)
        {
            try
            {
                City.DeleteCity(id);
                return RedirectToAction("ShowCity");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}