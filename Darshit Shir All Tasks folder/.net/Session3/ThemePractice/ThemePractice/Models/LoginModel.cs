using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ThemePractice.Models
{
    public class LoginModel
    {


        [Display(Name = "Email Address")]
        [Required(ErrorMessage ="Email is required")]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage ="Email is not valid.")]
        public string Email { get; set; }
    
        [Display(Name = "Password")]
        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        [StringLength(25,MinimumLength =8)]
        public string Password { get; set; }
    }
}