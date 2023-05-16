using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Repositories.Repository;
using SchoolManagement_396.Models.Model;
using SchoolManagement_396.Helpers.Helpers;
using System.Data.Entity;

namespace SchoolManagement_396.Repositories.Services
{
    public class CountryServices : ICountryRepository
    {
        private readonly SchoolMgmtEntities _dbContext;

        public CountryServices()
        {
            _dbContext = new SchoolMgmtEntities();
        }
        public CountryServices(SchoolMgmtEntities context)
        {
            _dbContext = context;
        }
        public List<Country> GetCountryList()
        {
            List<Country> countries = _dbContext.Country.ToList();
            return countries;
        }

        public int GetCountOfCountry()
        {
            List<Country> country = _dbContext.Country.ToList();
            var CountryCount = (from num in country
                             select num).Count();
            return CountryCount;
        }

        public int AddCountry(CountryModel model)
        {
            if (_dbContext.Country.Any(x => x.CountryName.ToLower() == model.CountryName.ToLower()))
            {
                return 0;
            }
            else
            {
                _dbContext.Country.Add(CountryHelper.ConvertToCountryModel(model));
                _dbContext.SaveChanges();
                return 1;
            }
        }

        public Country GetCountryById(int id)
        {
            return _dbContext.Country.Find(id);
        }

        public void EditCountry(int id ,CountryModel model)
        {
            GetCountryById(id).CountryName = model.CountryName;
            _dbContext.SaveChanges();
        }
        
        public void DeleteCountry(int id)
        {
            var delCountry = _dbContext.Country.Find(id);
            if (delCountry != null) _dbContext.Country.Remove(delCountry);
            _dbContext.SaveChanges();
        }
    }
}
