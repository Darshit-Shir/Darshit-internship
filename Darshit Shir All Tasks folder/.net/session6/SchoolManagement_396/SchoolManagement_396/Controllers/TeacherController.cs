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
    public class TeacherController : Controller
    {
        ITeacherRepository Teacher;
        ISubjectRepository Subject;

        public TeacherController(ITeacherRepository _teacher, ISubjectRepository _subject)
        {
            Teacher = _teacher;
            Subject = _subject;
        }

        public JsonResult Teachers()
        {
            return Json(Teacher.GetTeacherListForJson(), JsonRequestBehavior.AllowGet);
        }

        // GET: Teacher
        public ActionResult ShowTeachers()
        {

            return View(Teacher.GetTeacherList());
        }

        public ActionResult AddTeacher()
        {
            ViewBag.SubjectList = new SelectList(Subject.GetSubjectList(), "SubjectID", "SubjectName");
            return View();
        }

        [HttpPost]
        public ActionResult AddTeacher(TeacherModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    int IsCheck = Teacher.AddTeacher(model);
                    if (IsCheck == 1)
                    {
                        ModelState.Clear();
                        ViewBag.Issuccess = "Teacher Added successfully";
                        return RedirectToAction("AddTeacher", "Teacher");
                    }
                    else
                    {
                        ViewBag.TeacherError = "Teacher with this email already exist";
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

        //edit teacher
        public ActionResult EditTeacher(int id)
        {
            
            TeacherModel teacherEdit = new TeacherModel
            {
                FirstName = Teacher.GetTeacherById(id).FirstName,
                LastName = Teacher.GetTeacherById(id).LastName,
                Email = Teacher.GetTeacherById(id).Email,
                Address = Teacher.GetTeacherById(id).Address,
                MobileNo = Teacher.GetTeacherById(id).MobileNo,
                Subjects = Teacher.GetTeacherById(id).Subjects

            };
            ViewBag.SubjectList = new SelectList(Subject.GetSubjectList(), "SubjectID", "SubjectName");
            return View(teacherEdit);
        }

        [HttpPost]
        public ActionResult EditTeacher(int id, TeacherModel model)
        {
            ViewBag.SubjectList = new SelectList(Subject.GetSubjectList(), "SubjectID", "SubjectName");
            try
            {
                if (ModelState.IsValid)
                {
                    Teacher.EditTeacher(id, model);
                    ViewBag.SubjectList = new SelectList(Subject.GetSubjectList(), "SubjectID", "SubjectName");
                    return RedirectToAction("ShowTeachers");
                }
                ViewBag.SubjectList = new SelectList(Subject.GetSubjectList(), "SubjectID", "SubjectName");
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ActionResult DeleteTeacher(int id)
        {
            try
            {
                Teacher.DeleteTeacher(id);
                return RedirectToAction("ShowTeachers");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}