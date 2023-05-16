using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Repositories.Repository
{
    public interface IStudentRepository
    {
        List<SP_GetStudentDetails_Result> GetStudentList();
        Student GetStudentById(int id);
        int AddStudent(StudentModel model);

        void EditStudent(int id, StudentModel moel);
        void DeleteStudent(int id);
        int GetCountOfStudents();
    }
}
