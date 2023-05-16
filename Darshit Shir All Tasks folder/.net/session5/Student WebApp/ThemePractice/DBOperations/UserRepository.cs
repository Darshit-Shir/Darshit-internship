using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ThemePractice.Models;
using ThemePractice.DBConnection;

namespace ThemePractice.DBOperations
{
    public class UserRepository
    {
        public int AddUser(StudentModel model)
        {
            using (var context = new DarshitEntities())
            {
                UserTable User = new UserTable()
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Address = model.Address,
                    MobileNo = model.MobileNo,
                    CountryId = model.CId,
                    StateId = model.SId,
                    CityId = model.CityId
                };
                context.UserTable.Add(User);

                context.SaveChanges();

                return User.Id;
            }
        }
    }
}