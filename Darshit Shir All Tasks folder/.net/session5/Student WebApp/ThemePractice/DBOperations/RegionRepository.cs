using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ThemePractice.Models;
using ThemePractice.DBConnection;

namespace ThemePractice.DBOperations
{
    public class RegionRepository
    {
        public int AddCountry(CountryModel model)
        {
            using (var context = new DarshitEntities())
            {
                Country country = new Country()
                {
                    CountryName = model.CountryName
                };

                context.Country.Add(country);
                context.SaveChanges();

                return country.CId;
            }
        }

        public int AddState(StatesModel model)
        {
            using (var context = new DarshitEntities())
            {
                States state = new States()
                {
                    StateName = model.StateName,
                    CountryId = model.CountryId
                };

                context.States.Add(state);
                context.SaveChanges();

                return state.SId;
            }
        }

        public int AddCity(CityModel model)
        {
            using (var contex = new DarshitEntities())
            {
                City city = new City()
                {
                    CityName = model.CityName,
                    CountryId = model.CountryId,
                    StateId = model.StateId
                };

                contex.City.Add(city);
                contex.SaveChanges();

                return city.CityId;
            }
        }


    }
}