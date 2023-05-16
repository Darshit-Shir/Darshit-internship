using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ThemePractice.DBConnection;
using ThemePractice.Models;
using ThemePractice.DBOperations;

namespace ThemePractice.Controllers
{
    public class SignInOptionsController : Controller
    {
        DarshitEntities darshit = new DarshitEntities();
        LoginRepository repo = new LoginRepository();

        public SignInOptionsController()
        {
            repo = new LoginRepository();
        }

        // GET: Login
        public ActionResult Login()
        {
            if (Session["User"] != null)
            {
                return RedirectToAction("index", "Home");
            }
            else
            {
                return View();
            }
        }

        [HttpPost]
        public ActionResult Login(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                if(darshit.credential.Any(x => x.Email == model.Email))
                {
                    if(darshit.credential.Any(x => x.Email == model.Email && x.Password == model.Password))
                    {
                        return RedirectToAction("Dashboard", "Home");
                    }
                    else
                    {
                        ViewBag.ErrorMessage = "Password is inccorect";
                        return View();
                    }
                }
                else
                {
                    ViewBag.Error = "No user found";
                    return View();
                }
            }
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(RegisterModel model)
        {
            try { 
                if (ModelState.IsValid)
                {
                    if (darshit.credential.Any((x) => x.Email == model.Email))
                    {
                        ViewBag.error = "User already exist with this email";
                        return View();
                    }
                    else
                    {
                        int id = repo.AddUser(model);
                        if (id > 0)
                        {
                            ModelState.Clear();
                            ViewBag.Issuccess = "User Added Successfully";
                            return RedirectToAction("Login", "SignInOptions");
                        }
                    }
                }
                return View();
            }
            catch (Exception)
            {
                return View("Error");
            }
        }
    }
}