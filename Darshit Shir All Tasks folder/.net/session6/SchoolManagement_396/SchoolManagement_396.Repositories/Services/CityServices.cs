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
    public class CityServices : ICityRepository
    {
        private readonly SchoolMgmtEntities _dbContext;

        public CityServices()
        {
            _dbContext = new SchoolMgmtEntities();
        }
        public CityServices(SchoolMgmtEntities context)
        {
            _dbContext = context;
        }
        public List<City> GetCityList()
        {
            List<City> city = _dbContext.City.ToList();
            return city;
        }

        public int GetCountOfCity()
        {
            List<City> city = _dbContext.City.ToList();
            var CityCount = (from num in city
                                select num).Count();
            return CityCount;
        }

        public int AddCity(CityModel model)
        {
            if (_dbContext.City.Any(x => x.CityName.ToLower() == model.CityName.ToLower()))
            {
                return 0;
            }
            else
            {
                _dbContext.City.Add(CityHelper.ConvertToCityModel(model));
                _dbContext.SaveChanges();
                return 1;
            }
        }

        public City GetCityListById(int id)
        {
            return _dbContext.City.Find(id);
        }

        public void EditCity(int id, CityModel model)
        {
            GetCityListById(id).CityName = model.CityName;
            _dbContext.SaveChanges();
        }

        public void DeleteCity(int id)
        {
            var delCity = _dbContext.City.Find(id);
            if (delCity != null) _dbContext.City.Remove(delCity);
            _dbContext.SaveChanges();
        }
    }
}
