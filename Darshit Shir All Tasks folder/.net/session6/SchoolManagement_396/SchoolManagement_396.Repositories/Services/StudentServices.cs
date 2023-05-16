using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Repositories.Repository;
using SchoolManagement_396.Models.Model;
using SchoolManagement_396.Helpers.Helpers;

namespace SchoolManagement_396.Repositories.Services
{
    public class StudentServices : IStudentRepository
    {
        public readonly SchoolMgmtEntities _dbContext;

        public StudentServices()
        {
            _dbContext = new SchoolMgmtEntities();
        }
        public StudentServices(SchoolMgmtEntities context)
        {
            _dbContext = context;
        }

        public List<SP_GetStudentDetails_Result> GetStudentList()
        {
            List<SP_GetStudentDetails_Result> StudentList = _dbContext.SP_GetStudentDetails().ToList();
            return StudentList;
        }

        public int GetCountOfStudents()
        {
            List<Student> std = _dbContext.Student.ToList();
            var StudentCount = (from num in std
                                select num).Count();
            return StudentCount;
        }

        public int AddStudent(StudentModel model)
        {
            if (_dbContext.Student.Any(x => x.Email == model.Email))
            {
                return 0;
            }
            else
            {
                _dbContext.Student.Add(StudentHelper.ConvertToStudentModel(model));
                _dbContext.SaveChanges();
                return 1;
            }
        }

        public Student GetStudentById(int id)
        {
            return _dbContext.Student.Find(id);
        }

        public void EditStudent(int id, StudentModel model)
        {
            GetStudentById(id).FirstName = model.FirstName;
            GetStudentById(id).LastName = model.LastName;
            GetStudentById(id).Email = model.Email;
            GetStudentById(id).Address = model.Address;
            GetStudentById(id).MobileNo = model.MobileNo;
            GetStudentById(id).CountryId = model.CountryId;
            GetStudentById(id).StateId = model.StateId;
            GetStudentById(id).CityId = model.CityId;
            GetStudentById(id).TeacherId = model.TeacherId;

            _dbContext.SaveChanges();
        }

        public void DeleteStudent(int id)
        {
            var delStudent = _dbContext.Student.Find(id);
            if (delStudent != null) _dbContext.Student.Remove(delStudent);
            _dbContext.SaveChanges();
        }
    }
}
