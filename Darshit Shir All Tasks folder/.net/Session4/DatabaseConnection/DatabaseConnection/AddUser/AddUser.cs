using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DatabaseConnection.Models;

namespace DatabaseConnection.Context
{
    public class AddUser
    {
        public int addUser(UserTable model)
        {
            using(var context = new UserEntities())
            {
                UserTable user = new UserTable()
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Password = model.Password,
                    Address = model.Address,
                    MobileNo = model.MobileNo,
                    CountryId = model.CountryId,
                    StateId = model.StateId,
                    CityId = model.CityId
                };
                context.UserTable.Add(user);

                context.SaveChanges();

                return user.Id;
            }
        }

        
    }
}