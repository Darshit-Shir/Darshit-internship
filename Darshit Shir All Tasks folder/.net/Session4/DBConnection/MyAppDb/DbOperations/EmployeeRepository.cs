using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyAppModels;

namespace MyAppDb.DbOperations
{
    public class EmployeeRepository
    {
        public int AddEmployee(EmployeeModel model)
        {
            using (EmployeeDBEntities context = new EmployeeDBEntities()) 
            {
                Employee emp = new Employee()
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    AddressId = model.AddressId

                };
                context.Employee.Add(emp);

                context.SaveChanges();

                return emp.Id;
            }
        }
    }
}
