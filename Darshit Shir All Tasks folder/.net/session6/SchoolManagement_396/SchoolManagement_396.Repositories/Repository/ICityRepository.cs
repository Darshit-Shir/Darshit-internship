using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Repositories.Repository
{
    public interface ICityRepository
    {
        List<City> GetCityList();
        City GetCityListById(int id);
        int AddCity(CityModel model);

        void EditCity(int id, CityModel model);
        void DeleteCity(int id);
        int GetCountOfCity();
    }
}
