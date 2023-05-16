using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GetData.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? UserTypeId { get; set; }
        public string Address { get; set; }
        public string MobileNo { get; set; }
        public int? CountryId { get; set; }
        public int? StateId { get; set; }
        public int? CityId { get; set; }
    }
}