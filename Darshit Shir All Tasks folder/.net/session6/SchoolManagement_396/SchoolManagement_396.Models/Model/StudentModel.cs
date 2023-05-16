using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace SchoolManagement_396.Models.Model
{
    public class StudentModel
    {
        public int Id { get; set; }

        [Display(Name = "First Name :")]
        [Required(ErrorMessage = "First Name is required")]
        [DataType(DataType.Text)]
        public string FirstName { get; set; }

        [Display(Name = "Last Name :")]
        [Required(ErrorMessage = "Last Name is required")]
        [DataType(DataType.Text)]
        public string LastName { get; set; }

        [Display(Name = "Email :")]
        [Required(ErrorMessage = "Email is required")]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Email is not valid.")]
        public string Email { get; set; }

        [Display(Name = "Address :")]
        [Required(ErrorMessage = "Address is required")]
        [DataType(DataType.Text)]
        public string Address { get; set; }

        [Display(Name = "Mobile No. :")]
        [Required(ErrorMessage = "Mobile No. is required")]
        [DataType(DataType.PhoneNumber)]
        [RegularExpression(@"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$", ErrorMessage = "Enter valid Mobile No.")]
        public string MobileNo { get; set; }

        [Display(Name = "Country :")]
        [Required(ErrorMessage = "Country is required")]
        public int CountryId { get; set; }

        [Display(Name = "State :")]
        [Required(ErrorMessage = "State is required")]
        public int StateId { get; set; }

        [Display(Name = "City :")]
        [Required(ErrorMessage = "City is required")]
        public int CityId { get; set; }

        [Display(Name = "Teacher :")]
        [Required(ErrorMessage = "Teacher is required")]
        public string TeacherId { get; set; }



        public virtual CityModel City { get; set; }
        public virtual CountryModel Country { get; set; }
        public virtual StatesModel States { get; set; }
    }
}
