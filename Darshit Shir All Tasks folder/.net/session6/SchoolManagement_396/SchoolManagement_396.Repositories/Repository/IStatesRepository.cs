using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Repositories.Repository
{
    public interface IStatesRepository
    {
        List<States> GetStatesList();
        States GetStatesListById(int id);
        int AddStates(StatesModel model);

        void EditStates(int id, StatesModel model);
        void DeleteStates(int id);
        int GetCountOfStates();
    }
}
