using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ThemePractice.Models
{
    public class CityModel
    {
        public int CityId { get; set; }

        [Display(Name = "City")]
        [Required(ErrorMessage = "City is required")]
        public string CityName { get; set; }

        [Display(Name = "Country :")]
        [Required(ErrorMessage = "Country is required")]
        public int CountryId { get; set; }

        [Display(Name = "State :")]
        [Required(ErrorMessage = "state is required")]
        public int StateId { get; set; }

        public virtual CountryModel Country { get; set; }
        public virtual StatesModel States { get; set; }
    }
}