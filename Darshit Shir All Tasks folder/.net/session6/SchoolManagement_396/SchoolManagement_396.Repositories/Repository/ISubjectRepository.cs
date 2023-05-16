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
    public interface ISubjectRepository
    {
        IEnumerable<subject> GetSubjectList();
        IEnumerable GetSubjectListForJson();

        subject GetSubjectById(int id);
        int AddSubject(SubjectModel model);
        void EditSubject(int id, SubjectModel model);
        void deleteSubject(int id);
        int GetCountOfSubject();
    }
}
