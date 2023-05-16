using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Repositories.Repository
{
    public interface ICountryRepository
    {
        List<Country> GetCountryList();
        Country GetCountryById(int id);
        int AddCountry(CountryModel model);
        void EditCountry(int id ,CountryModel model);
        void DeleteCountry(int id);
        int GetCountOfCountry();

    }
}
