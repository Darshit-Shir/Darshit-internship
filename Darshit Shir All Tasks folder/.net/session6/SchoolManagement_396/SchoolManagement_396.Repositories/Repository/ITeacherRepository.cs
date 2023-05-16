using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Repositories.Repository
{
    public interface ITeacherRepository
    {
        List<Sp_GetTeacherDetails_Result> GetTeacherList();
        IEnumerable GetTeacherListForJson();
        teacher GetTeacherById(int id);
        int AddTeacher(TeacherModel model);
        void EditTeacher(int id, TeacherModel moel);
        int GetCountOfTeachers();
        void DeleteTeacher(int id);
    }
}
