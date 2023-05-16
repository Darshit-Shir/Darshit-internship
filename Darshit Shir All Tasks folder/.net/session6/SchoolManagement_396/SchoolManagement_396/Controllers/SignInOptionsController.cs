using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using Newtonsoft.Json;
using SchoolManagement_396.Models;
using SchoolManagement_396.Repositories.Repository;

namespace SchoolManagement_396.Controllers
{
    
    public class SignInOptionsController : Controller
    {
        IRegisterRepository register;
        ILoginRepository Loginrepo;

        public SignInOptionsController(IRegisterRepository _Register, ILoginRepository _Login)
        {
            register = _Register;
            Loginrepo = _Login;
        }

        // Login Action

        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(LoginModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    int Ischeck = Loginrepo.LoginUser(model);

                    if (Ischeck == 1)
                    {
                        string userdata = JsonConvert.SerializeObject(model);
                        FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(2, "User", DateTime.Now, DateTime.Now.AddMinutes(15), true, userdata);
                        HttpCookie httpCookie = new HttpCookie(FormsAuthentication.FormsCookieName, FormsAuthentication.Encrypt(ticket));
                        Response.Cookies.Add(httpCookie);
                        ModelState.Clear();
                        TempData["User"] = Loginrepo.GetUserName(model);
                        return RedirectToAction("Dashboard", "Home");

                    }
                    else if(Ischeck == 0)
                    {
                        ViewBag.ErrorMessage = "Password is inccorect";
                        return View();
                    }
                    else
                    {
                        ViewBag.Error = "No user found";
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

        public ActionResult LogOut()
        {
            //Session["isLoggedIn"] = false;
            FormsAuthentication.SignOut();
            //Session.Clear();
            //Session.Abandon();
            //Session.RemoveAll();
            return RedirectToAction("Login", "SignInOptions");
        }

        //register action
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(RegisterModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    bool Ischeck = register.AddUser(model);

                    if (Ischeck)
                    {
                        ModelState.Clear();
                        ViewBag.Issuccess = "User Added Successfully";
                        return RedirectToAction("Login", "SignInOptions");
                        
                    }
                    else
                    {
                        ViewBag.error = "User already exist with this email";
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
    }
}