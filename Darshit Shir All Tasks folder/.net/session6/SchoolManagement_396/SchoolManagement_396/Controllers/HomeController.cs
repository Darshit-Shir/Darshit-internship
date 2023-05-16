using Newtonsoft.Json;
using SchoolManagement_396.Models;
using SchoolManagement_396.Repositories.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace SchoolManagement_396.Controllers
{
    public class HomeController : Controller
    {
        ITeacherRepository Teacher;
        IStudentRepository student;
        ISubjectRepository Subject;
        ICountryRepository Country;
        IStatesRepository State;
        ICityRepository City;
        
        public HomeController(ITeacherRepository _teacher, IStudentRepository _student, ICityRepository _City, ICountryRepository _Country, IStatesRepository _State, ISubjectRepository _Subject)
        {
            Teacher = _teacher;
            student = _student;
            Subject = _Subject;
            Country = _Country;
            State = _State;
            City = _City;
        }
        // GET: Home
        [Authorize]
        public ActionResult Dashboard()
        {
            FormsAuthenticationTicket user = FormsAuthentication.Decrypt(Request.Cookies[FormsAuthentication.FormsCookieName].Value);
            var logindata = JsonConvert.DeserializeObject(user.UserData);
            ViewBag.TeacherCount = Teacher.GetCountOfTeachers();
            ViewBag.StudentCount = student.GetCountOfStudents();
            ViewBag.SubjectCount = Subject.GetCountOfSubject();
            ViewBag.CountryCount = Country.GetCountOfCountry();
            ViewBag.StatesCount = State.GetCountOfStates();
            ViewBag.CityCount = City.GetCountOfCity();
            return View();
        }
    }
}