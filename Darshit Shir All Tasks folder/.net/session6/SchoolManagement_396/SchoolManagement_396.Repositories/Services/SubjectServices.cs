using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Repositories.Repository;
using SchoolManagement_396.Models.Model;
using SchoolManagement_396.Helpers.Helpers;
using System.Collections;

namespace SchoolManagement_396.Repositories.Services
{
    public class SubjectServices : ISubjectRepository
    {
        private readonly SchoolMgmtEntities _dbContext;

        public SubjectServices()
        {
            _dbContext = new SchoolMgmtEntities();
        }
        public SubjectServices(SchoolMgmtEntities context)
        {
            _dbContext = context;
        }

        public IEnumerable<subject> GetSubjectList()
        {
            IEnumerable<subject> GetAllSubject = _dbContext.subject.ToList();
            return GetAllSubject;
        }

        public int GetCountOfSubject()
        {
            List<subject> sub = _dbContext.subject.ToList();
            var SubjectCount = (from num in sub
                             select num).Count();
            return SubjectCount;
        }

        public IEnumerable GetSubjectListForJson()
        {
            var result = GetSubjectList();
            return from S in result
                   select new
                   {
                       S.SubjectID,
                       S.SubjectName
                   };
        }

        public int AddSubject(SubjectModel model)
        {
            if (_dbContext.subject.Any(x => x.SubjectName.ToLower() == model.SubjectName.ToLower()))
            {
                return 0;
            }
            else
            {
                _dbContext.subject.Add(SubjectHelper.ConvertToSubjectModel(model));
                _dbContext.SaveChanges();
                return 1;
            }
        }

        public subject GetSubjectById(int id)
        {
            return _dbContext.subject.Find(id);
        }

        public void EditSubject(int id, SubjectModel model)
        {
            GetSubjectById(id).SubjectName = model.SubjectName;
            _dbContext.SaveChanges();
        }

        public void deleteSubject(int id)
        {
            var delSubject = _dbContext.subject.Find(id);
            if(delSubject != null) _dbContext.subject.Remove(delSubject);
            _dbContext.SaveChanges();
        }
    }
}
