using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PracticeProject.Models.Context;
using PracticeProject.Models.Model;

namespace PracticeProject.Repositories.Repository
{
    public interface IEmployeeRepository
    {
        List<Employee> GetEmployeeList();
    }
}
