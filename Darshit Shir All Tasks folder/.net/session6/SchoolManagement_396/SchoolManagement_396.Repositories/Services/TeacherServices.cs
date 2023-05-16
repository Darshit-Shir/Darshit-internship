using SchoolManagement_396.Repositories.Repository;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;
using SchoolManagement_396.Helpers.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace SchoolManagement_396.Repositories.Services
{
    public class TeacherServices : ITeacherRepository
    {
        private readonly SchoolMgmtEntities _dbContext;

        public TeacherServices()
        {
            _dbContext = new SchoolMgmtEntities();
        }
        public TeacherServices(SchoolMgmtEntities context)
        {
            _dbContext = context;
        }

        public List<Sp_GetTeacherDetails_Result>  GetTeacherList()
        {
            List<Sp_GetTeacherDetails_Result> TeacherList = _dbContext.Sp_GetTeacherDetails().ToList();
            return TeacherList;
        }

        public IEnumerable GetTeacherListForJson()
        {
            var result = GetTeacherList();
            return from S in result
                   select new
                   {
                       S.TeacherId,
                       S.FirstName
                   };
        }

        public int GetCountOfTeachers()
        {
            List<teacher> teacher = _dbContext.teacher.ToList();
            var TeacherCount = (from num in teacher
                                select num).Count();
            return TeacherCount;
        }

        public int AddTeacher(TeacherModel model)
        {
            if(_dbContext.teacher.Any(x=>x.Email == model.Email)){
                return 0;
            }
            else
            {
                _dbContext.teacher.Add(TeacherHelper.ConvertToTeacherModel(model));
                _dbContext.SaveChanges();
                return 1;
            }
        }

        public teacher GetTeacherById(int id)
        {
            return _dbContext.teacher.Find(id);
        }

        public void EditTeacher(int id, TeacherModel model)
        {
            GetTeacherById(id).FirstName = model.FirstName;
            GetTeacherById(id).LastName = model.LastName;
            GetTeacherById(id).Email = model.Email;
            GetTeacherById(id).Address = model.Address;
            GetTeacherById(id).MobileNo = model.MobileNo;
            GetTeacherById(id).Subjects = model.Subjects;
            _dbContext.SaveChanges();
        }

        public void DeleteTeacher(int id)
        {
            var delTeacher = _dbContext.teacher.Find(id);
            if (delTeacher != null) _dbContext.teacher.Remove(delTeacher);
            _dbContext.SaveChanges();
        }
    }
}
