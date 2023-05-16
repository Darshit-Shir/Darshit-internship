using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Validation.Models
{
    public class Employee
    {
        [Required(ErrorMessage = "Please enter your Fisrt Name")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Please enter your Last Name")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Please enter your Email Address")]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please enter your Age")]
        [Range(18,45)]
        public int Age { get; set; }
    }
}