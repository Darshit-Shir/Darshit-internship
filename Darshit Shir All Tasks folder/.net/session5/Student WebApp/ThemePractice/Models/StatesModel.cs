using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ThemePractice.Models
{
    public class StatesModel
    {
        public int SId { get; set; }

        [Display(Name = "State :")]
        [Required(ErrorMessage = "state is required")]
        public string StateName { get; set; }

        [Display(Name = "Country :")]
        [Required(ErrorMessage = "Country is required")]
        public int CountryId { get; set; }

        public virtual CountryModel Country { get; set; }
    }
}