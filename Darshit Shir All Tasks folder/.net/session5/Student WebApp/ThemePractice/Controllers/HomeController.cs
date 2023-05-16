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
    public class HomeController : Controller
    {
        UserRepository repo = null;

        public HomeController()
        {
            repo = new UserRepository();
        }

        // Form
        public ActionResult Form()
        {
            ViewBag.CountryList = new SelectList(GetCountryList(), "CId", "CountryName");
            return View();
        }

        [HttpPost]
        public ActionResult Form(StudentModel model)
        {
            try { 
                if (ModelState.IsValid)
                {
                    int id = repo.AddUser(model);
                    if (id > 0)
                    {
                        ModelState.Clear();
                        ViewBag.Issuccess = "Data Added Successfully";
                    }
                }
                return RedirectToAction("Form");
            }
            catch (Exception)
            {
                return View("Error");
            }
        }

        // Get student records
        public ActionResult GetAllStudents()
        {
            List<SP_GET_ALL_USER_Result> student = new List<SP_GET_ALL_USER_Result>();
            using (DarshitEntities entity = new DarshitEntities())
            {
                student = entity.SP_GET_ALL_USER().ToList();
            }
            return View(student);
        }

        public ActionResult EditStudent(int Id)
        {
            StudentModel std;
            using (DarshitEntities entity = new DarshitEntities())
            {
                UserTable user = entity.UserTable.Where(x => x.Id == Id).FirstOrDefault();

                std = new StudentModel
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    Address = user.Address,
                    MobileNo = user.MobileNo,
                    CId = user.CountryId,
                    SId = user.StateId,
                    CityId = user.CityId
                };
                ViewBag.CountryList = new SelectList(GetCountryList(), "CId", "CountryName");
                List<States> State = entity.States.Where(x => x.CountryId == user.CountryId).ToList();
                ViewBag.StateList = new SelectList(State, "SId", "StateName");
                List<City> City = entity.City.Where(x => x.StateId == user.StateId).ToList();
                ViewBag.CityList = new SelectList(City, "CityId", "CityName");
                TempData["ID"] = Id;
                return View(std);
            }
        }

        [HttpPost]
        public ActionResult EditStudent(StudentModel model)
        {
            using (DarshitEntities entity = new DarshitEntities())
            {
                int id = Convert.ToInt32(TempData["ID"]);
                UserTable user = entity.UserTable.Where(x => x.Id == id).FirstOrDefault();

                user.FirstName = model.FirstName;
                user.LastName = model.LastName;
                user.Email = model.Email;
                user.Address = model.Address;
                user.MobileNo = model.MobileNo;
                user.CountryId = model.CId;
                user.StateId = model.SId;
                user.CityId = model.CityId;

                entity.SaveChanges();
                return RedirectToAction("GetAllStudents");
            }
        }

        public ActionResult DeleteStudent(int Id)
        {
            using (DarshitEntities entity = new DarshitEntities())
            {
                UserTable data = entity.UserTable.Where(x => x.Id == Id).FirstOrDefault();
                entity.UserTable.Remove(data);
                entity.SaveChanges();
                return RedirectToAction("GetAllStudents");
            }
        }

        public List<Country> GetCountryList()
        {
            DarshitEntities entity = new DarshitEntities();
            List<Country> countries = entity.Country.ToList();
            return countries;
        }

        public ActionResult GetStatesList(int CId)
        {
            DarshitEntities entity = new DarshitEntities();
            List<States> selectList = entity.States.Where(x => x.CountryId == CId).ToList();
            ViewBag.StatesList = new SelectList(selectList, "SId", "StateName");
            return PartialView("DisplayStates");
        }

        public ActionResult GetCityList(int SId)
        {
            DarshitEntities entity = new DarshitEntities();
            List<City> selectList = entity.City.Where(x => x.StateId == SId).ToList();
            ViewBag.CityList = new SelectList(selectList, "CityId", "CityName");
            return PartialView("DisplayCities");
        }

        public ActionResult Dashboard()
        {
            return View();
        }
    }
}