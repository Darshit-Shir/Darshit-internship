using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement_396.Models.Contex;
using SchoolManagement_396.Models.Model;

namespace SchoolManagement_396.Helpers.Helpers
{
    public class SubjectHelper
    {
        public static subject ConvertToSubjectModel(SubjectModel model)
        {
            return new subject
            {
                SubjectName = model.SubjectName
            };
        }
    }
}
