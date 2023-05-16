using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace PracticeProject.Models.Model
{
    public class EmployeeModel
    {
        public int EmployeeId { get; set; }

        [Display(Name ="Employee Name : ")]
        [Required(ErrorMessage ="Employee Name is required")]
        [DataType(DataType.Text)]
        public string EName { get; set; }

        [Display(Name ="Email : ")]
        [Required(ErrorMessage ="Email is required")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Display(Name = "Gender : ")]
        [Required(ErrorMessage = "Gender is required")]
        public string Gender { get; set; }

        [Display(Name = "Joining Date : ")]
        [Required(ErrorMessage = "Joining Date is required")]
        [DataType(DataType.Date)]
        public DateTime JoiningDate { get; set; }

        [Display(Name = "Country : ")]
        [Required(ErrorMessage = "Country is required")]
        public int CountryId { get; set; }

        [Display(Name = "State : ")]
        [Required(ErrorMessage = "State is required")]
        public int StateId { get; set; }

        [Display(Name = "City : ")]
        [Required(ErrorMessage = "City is required")]
        public int CityId { get; set; }

        [Display(Name = "Skills : ")]
        [Required(ErrorMessage = "Skill is required")]
        public string SkillId { get; set; }
    }
}
