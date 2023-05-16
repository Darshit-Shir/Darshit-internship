using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PracticeProject.Models.Context;
using PracticeProject.Helpers.Helpers;
using PracticeProject.Repositories.Repository;

namespace PracticeProject.Repositories.Services
{
    public class EmployeeServices : IEmployeeRepository
    {
        private readonly DbEntities _dbContext;

        public EmployeeServices()
        {
            _dbContext = new DbEntities();
        }
        public EmployeeServices(DbEntities context)
        {
            _dbContext = context;
        }

        public List<Employee> GetEmployeeList()
        {
            DbEntities entity = new DbEntities();
            List<Employee> Emp = entity.Employees.ToList();
            return Emp;
        }
    }
}
