using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ThemePractice.Models
{
    public class DataTable
    {
        public static List<DataTable> data = new List<DataTable>();

        
    public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public int MobileNo { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }

    }
}