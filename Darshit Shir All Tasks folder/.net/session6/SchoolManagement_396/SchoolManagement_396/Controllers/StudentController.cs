using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SchoolManagement_396.Models;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;
using SchoolManagement_396.Repositories.Repository;

namespace SchoolManagement_396.Controllers
{
    public class StudentController : Controller
    {
        SchoolMgmtEntities entity = new SchoolMgmtEntities();
        IStudentRepository student;
        ICountryRepository Country;
        ITeacherRepository Teacher;

        public StudentController(IStudentRepository _student, ICountryRepository _Country, ITeacherRepository _Teacher)
        {
            student = _student;
            Country = _Country;
            Teacher = _Teacher;
        }
        // GET: Student
        public ActionResult ShowStudent()
        {
            return View(student.GetStudentList());
        }

        public ActionResult AddStudent()
        {
            ViewBag.CountryList = new SelectList(Country.GetCountryList(), "CId", "CountryName");
            ViewBag.TeacherList = new SelectList(Teacher.GetTeacherList(), "TeacherId", "FirstName");
            return View();
        }

        [HttpPost]
        public ActionResult AddStudent(StudentModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    int IsCheck = student.AddStudent(model);
                    if (IsCheck == 1)
                    {
                        ModelState.Clear();
                        ViewBag.Issuccess = "Student Added successfully";
                        return RedirectToAction("AddStudent", "Student");
                    }
                    else
                    {
                        ViewBag.StudentError = "Student with this email already exist";
                        ModelState.Clear();
                        ViewBag.CountryList = new SelectList(Country.GetCountryList(), "CId", "CountryName");
                        ViewBag.TeacherList = new SelectList(Teacher.GetTeacherList(), "TeacherId", "FirstName");
                        return View();
                    }
                }
                ViewBag.CountryList = new SelectList(Country.GetCountryList(), "CId", "CountryName");
                ViewBag.TeacherList = new SelectList(Teacher.GetTeacherList(), "TeacherId", "FirstName");
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //edit Student
        public ActionResult EditStudent(int id)
        {
            Student std = entity.Student.Where(x => x.Id == id).FirstOrDefault();
            StudentModel StudentEdit = new StudentModel
            {
                FirstName = student.GetStudentById(id).FirstName,
                LastName = student.GetStudentById(id).LastName,
                Email = student.GetStudentById(id).Email,
                Address = student.GetStudentById(id).Address,
                MobileNo = student.GetStudentById(id).MobileNo,
                CountryId = student.GetStudentById(id).CountryId,
                StateId = student.GetStudentById(id).StateId,
                CityId = student.GetStudentById(id).CityId,
                TeacherId = student.GetStudentById(id).TeacherId
            };
            ViewBag.TeacherList = new SelectList(Teacher.GetTeacherList(), "TeacherId", "FirstName");
            ViewBag.CountryList = new SelectList(Country.GetCountryList(), "CId", "CountryName");
            List<States> State = entity.States.Where(x => x.CountryId == std.CountryId).ToList();
            ViewBag.StateList = new SelectList(State, "SId", "StateName");
            List<City> City = entity.City.Where(x => x.StateId == std.StateId).ToList();
            ViewBag.CityList = new SelectList(City, "CityId", "CityName");
            return View(StudentEdit);
        }

        [HttpPost]
        public ActionResult EditStudent(int id, StudentModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    student.EditStudent(id, model);
                    ViewBag.TeacherList = new SelectList(Teacher.GetTeacherList(), "TeacherId", "FirstName");
                    return RedirectToAction("ShowStudent");
                }
                ViewBag.TeacherList = new SelectList(Teacher.GetTeacherList(), "TeacherId", "FirstName");
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ActionResult DeleteStudent(int id)
        {
            try
            {
                student.DeleteStudent(id);
                return RedirectToAction("ShowStudent");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}