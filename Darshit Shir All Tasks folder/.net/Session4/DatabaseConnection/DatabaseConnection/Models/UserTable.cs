using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace DatabaseConnection.Models
{
    public class UserTables
    {
        public int Id { get; set; }

        
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }
        
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        [Required]
        public string Password { get; set; }
        
        [Required]
        public int? UserTypeId { get; set; }
        
        [Required]
        public string Address { get; set; }
        
        [Required]
        public string MobileNo { get; set; }
        
        [Required]
        public int? CountryId { get; set; }
        
        [Required]
        public int? StateId { get; set; }

        [Required]
        public int? CityId { get; set; }

        public UserType UserType { get; set; }
    }
}