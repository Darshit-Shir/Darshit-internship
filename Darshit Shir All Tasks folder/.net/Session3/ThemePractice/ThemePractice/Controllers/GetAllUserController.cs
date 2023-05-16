using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ThemePractice.Models;
using ThemePractice.DBOperations;


namespace ThemePractice.Controllers
{
    public class GetAllUserController : Controller
        {
            UserRepository repository = null;
            
        public GetAllUserController()
        {
            repository = new UserRepository();
        }


        // GET: GetAllUser
        public ActionResult DataTables()
            {
                return View(DataTable.data);
            }
        public ActionResult Create()
            {
                return View();
            }
        [HttpPost]
        public ActionResult Create(UserTableModel model)
        {
            if (ModelState.IsValid)
            {
                int id = repository.AddUser(model);
                if (id > 0)
                {
                    ViewBag.Issuccess = "Data Added Successfully";
                }
            }
            return View();
        }
    }
}