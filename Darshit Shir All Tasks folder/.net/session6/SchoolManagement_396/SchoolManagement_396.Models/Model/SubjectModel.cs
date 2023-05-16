using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace SchoolManagement_396.Models.Model
{
    public class SubjectModel
    {
        public int SubjectID { get; set; }

        [Display(Name = "Subject :")]
        [Required(ErrorMessage = "Subject is required")]
        public string SubjectName { get; set; }

    }
}
