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
    public class StatesServices : IStatesRepository
    {
        private readonly SchoolMgmtEntities _dbContext;

        public StatesServices()
        {
            _dbContext = new SchoolMgmtEntities();
        }
        public StatesServices(SchoolMgmtEntities context)
        {
            _dbContext = context;
        }

        public List<States> GetStatesList()
        {
            List<States> state = _dbContext.States.ToList();
            return state;
        }
        public int GetCountOfStates()
        {
            List<States> state = _dbContext.States.ToList();
            var StatesCount = (from num in state
                             select num).Count();
            return StatesCount;
        }

        public int AddStates(StatesModel model)
        {
            if (_dbContext.States.Any(x => x.StateName.ToLower() == model.StateName.ToLower()))
            {
                return 0;
            }
            else
            {
                _dbContext.States.Add(StatesHelper.ConverToStatesModel(model));
                _dbContext.SaveChanges();
                return 1;
            }
        }

        public States GetStatesListById(int id)
        {
            return _dbContext.States.Find(id);
        }

        public void EditStates(int id,StatesModel model)
        {
            GetStatesListById(id).StateName = model.StateName;
            _dbContext.SaveChanges();
        }
        public void DeleteStates(int id)
        {
            var delState = _dbContext.States.Find(id);
            if (delState != null) _dbContext.States.Remove(delState);
            _dbContext.SaveChanges();
        }
    }
}
