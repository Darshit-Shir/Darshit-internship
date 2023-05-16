using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ThemePractice.Models;
using ThemePractice.DBConnection;

namespace ThemePractice.DBOperations
{
    public class LoginRepository
    {
        public int AddUser(RegisterModel model)
        {
            using (var context = new DarshitEntities())
            {
                credential user = new credential()
                {
                    firstName = model.FirstName,
                    lastName = model.LastName,
                    Email = model.Email,
                    Password = model.Password
                };

                context.credential.Add(user);
                context.SaveChanges();

                return user.id;

            }
        }
    }
}