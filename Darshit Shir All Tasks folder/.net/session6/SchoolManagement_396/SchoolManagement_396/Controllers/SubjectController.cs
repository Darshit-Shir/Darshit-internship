using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SchoolManagement_396.Models.Model;
using SchoolManagement_396.Repositories.Repository;
using SchoolManagement_396.Models.Contex;

namespace SchoolManagement_396.Controllers
{
    public class SubjectController : Controller
    {

        ISubjectRepository Subject;

        public SubjectController(ISubjectRepository _subject)
        {
            Subject = _subject;
        }
        public JsonResult Subjects()
        {
            return Json(Subject.GetSubjectListForJson(), JsonRequestBehavior.AllowGet);
        }

        // GET: Subject
        public ActionResult ShowSubjects()
        {
            return View(Subject.GetSubjectList());
        }

        public ActionResult AddSubject()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddSubject(SubjectModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    int IsCheck = Subject.AddSubject(model);
                    if (IsCheck == 1)
                    {
                        ModelState.Clear();
                        ViewBag.Issuccess = "Subject Added successfully";
                        return RedirectToAction("AddSubject", "Subject");
                    }
                    else
                    {
                        ViewBag.SubjectError = "Subject already exist";
                        ModelState.Clear();
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

        public ActionResult EditSubject(int id)
        {
            SubjectModel subjectEdit = new SubjectModel
            {
                SubjectName = Subject.GetSubjectById(id).SubjectName
            };
            return View(subjectEdit);
        }

        [HttpPost]
        public ActionResult EditSubject(int id, SubjectModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Subject.EditSubject(id, model);
                    return RedirectToAction("ShowSubjects");
                }
                return View();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ActionResult DeleteSubject(int id)
        {
            try
            {
                Subject.deleteSubject(id);
                return RedirectToAction("ShowSubjects");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}