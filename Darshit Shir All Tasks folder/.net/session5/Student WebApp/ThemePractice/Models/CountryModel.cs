using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ThemePractice.Models
{
    public class CountryModel
    {
        public int CId { get; set; }

        [Display(Name = "Country :")]
        [Required(ErrorMessage = "Country is required")]
        public string CountryName { get; set; }
    }
}