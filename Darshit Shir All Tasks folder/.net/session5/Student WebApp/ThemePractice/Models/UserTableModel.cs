using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace ThemePractice.Models
{
    public class UserTableModel
    {

        public int Id { get; set; }

        [Display(Name = "First Name")]
        [Required(ErrorMessage = "First Name is required")]
        [DataType(DataType.Text)]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        [Required(ErrorMessage = "Last Name is required")]
        [DataType(DataType.Text)]
        public string LastName { get; set; }

        [Display(Name = "Email Address")]
        [Required(ErrorMessage = "Email is required")]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Email is not valid.")]
        public string Email { get; set; }

        [Display(Name = "Address")]
        [Required(ErrorMessage = "Address is required")]
        [DataType(DataType.Text)]
        public string Address { get; set; }

        [Display(Name = "Mobile No.")]
        [Required(ErrorMessage ="Mobile No. is required")]
        [DataType(DataType.PhoneNumber)]
        public string MobileNo { get; set; }

        [Display(Name = "Country")]
        [Required(ErrorMessage = "Country is required")]
        public int CountryId { get; set; }

        [Display(Name = "State")]
        [Required(ErrorMessage = "state is required")]
        public int StateId { get; set; }

        [Display(Name = "City")]
        [Required(ErrorMessage = "City is required")]
        public int CityId { get; set; }

        public virtual CityModel City { get; set; }
        public virtual CountryModel Country { get; set; }
        public virtual StatesModel States { get; set; }
    }
}