using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleTables;

namespace CRUD_Task
{
    class Program
    {
        static void Main(string[] args) { 

            int Id = 1;

            List<User> UserDetails = new List<User>();

            List<Employee> CompanyDetails = new List<Employee>();

            CompanyDetails.Add(new Employee(1,"Shaligram infotech"));
            CompanyDetails.Add(new Employee(2,"Prompt solutions"));
            CompanyDetails.Add(new Employee(3,"Meditab technology"));

            Console.WriteLine("Static Table: ");
            var staticData = new ConsoleTable("Company Id", "Company Name");
            foreach (var i in CompanyDetails)
            {
                staticData.AddRow(i.CompId, i.CompanyName);
            }
            Console.WriteLine(staticData);
            Console.WriteLine("---------------------------------------------------------------------------\n");

            while (true) { 
                Console.WriteLine("1. Add User");
                Console.WriteLine("2. Read User");
                Console.WriteLine("3. Update User");
                Console.WriteLine("4. Delete User");
                Console.WriteLine("5. Order By User Name Descending");
                Console.WriteLine("6. Inner Join");
                Console.WriteLine("7. Left Join");
                Console.WriteLine("8. Exit\n");
                Console.Write("Enter Number which operation you want to perform: ");
                var num = Console.ReadLine();

                switch (num)
                {
                    case "1":
                        Console.Write("Enter Company Id: ");
                        var CId = Convert.ToInt32(Console.ReadLine());
                        Console.Write("Enter Name: ");
                        var name = Console.ReadLine();
                        Console.Write("Enter MobileNo: ");
                        var number = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("User Added Successfully");
                        Console.WriteLine("---------------------------------------------------------------------------\n");
                        UserDetails.Add(new User(Id,name, number, CId));
                        Id++;
                        break;

                    case "2":
                        Console.WriteLine();
                        var table = new ConsoleTable("User Id", "User Name", "Mobile No.","Company Id");
                        foreach (var o in UserDetails)
                        {
                            table.AddRow(o.Id, o.UserName, o.MobileNo,o.CompanyId);
                        }

                        Console.WriteLine(table);    
                        Console.WriteLine("---------------------------------------------------------------------------\n");
                        break;

                    case "3":
                        Console.Write("Enter User Id Whom You Want to Update: ");
                        var id = Convert.ToInt32(Console.ReadLine());
                        var index = UserDetails.FindIndex((i) => i.Id == id);
                        if (index == -1)
                        {
                            Console.WriteLine("Enter valid Id");
                            Console.WriteLine("---------------------------------------------------------------------------\n");
                        }
                        else
                        {
                            Console.Write("Enter Name: ");
                            var uname = Console.ReadLine();
                            Console.Write("Enter MobileNo: ");
                            var mnumber = Convert.ToInt32(Console.ReadLine());
                            Console.Write("Enter Company Id");
                            var ComId = Convert.ToInt32(Console.ReadLine());
                            UserDetails[index].UserName = uname;
                            UserDetails[index].MobileNo = mnumber;
                            UserDetails[index].CompanyId = ComId;

                            Console.WriteLine("User Updated Successfully");
                            Console.WriteLine("---------------------------------------------------------------------------\n");
                        }
                        break;

                    case "4":
                        Console.Write("Enter User Id Whom You Want to Delete: ");
                        var uid = Convert.ToInt32(Console.ReadLine());
                        var userIndex = UserDetails.FindIndex((i) => i.Id == uid);
                        if (userIndex == -1)
                        {
                            Console.WriteLine("Enter valid Id");
                            Console.WriteLine("---------------------------------------------------------------------------\n");
                        }
                        else
                        {
                            var result = from s in UserDetails
                                         where s.Id == uid
                                         select s;

                            var data = new ConsoleTable("User Id", "User Name", "Mobile No.","Company Id");
                            foreach (var student in result)
                                data.AddRow(student.Id, student.UserName, student.MobileNo,student.CompanyId);

                            Console.WriteLine(data);
                            Console.WriteLine("Are you Sure You want to delete this data Y/N: ");
                            var response = Console.ReadLine();
                            if(response.ToUpper() == "Y" || response.ToUpper() == "YES") { 
                            UserDetails.RemoveAt(userIndex);
                            Console.WriteLine("User Deleted Successfully");
                            }
                            else
                            {
                                Console.WriteLine("User is not deleted");
                            }
                            Console.WriteLine("---------------------------------------------------------------------------\n");
                        }
                        break;

                    case "5":
                        OrderByDesc();
                        break;

                    case "6":
                        JoinQuery();
                        break;

                    case "7":
                        LeftJoin();
                        break;

                    case "8":
                        Environment.Exit(0);
                        break;

                    default:
                        Console.WriteLine("\nEnter Valid Number");
                        Console.WriteLine("---------------------------------------------------------------------------\n");
                        break;

                }
                
                void OrderByDesc()
                {
                    var desc = from e in UserDetails
                              orderby e.UserName descending
                              select e;
                    var table = new ConsoleTable("User Id", "User Name", "Mobile No.", "Company Id");
                    foreach (var user in desc) { 
                        table.AddRow(user.Id, user.UserName, user.MobileNo, user.CompanyId);
                    }
                    Console.WriteLine(table);
                }

                void JoinQuery()
                {
                    var result = from u in UserDetails
                                 join c in CompanyDetails
                                 on u.CompanyId equals c.CompId
                                 select new {u.Id,u.UserName, u.MobileNo,c.CompId,c.CompanyName};
                    var table = new ConsoleTable("User Id", "User Name", "Mobile No.","Company Id","Company Name");
                    foreach (var i in result)
                    {
                        table.AddRow(i.Id,i.UserName, i.MobileNo,i.CompId,i.CompanyName);
                    }
                    Console.WriteLine(table);
                }

                void LeftJoin()
                {
                    var result = from u in UserDetails
                                 join c in CompanyDetails
                                 on u.CompanyId equals c.CompId into uctable
                                 from uc in uctable.DefaultIfEmpty()
                                 select new { u.Id, u.UserName, u.MobileNo,CompanyName=uc==null?"No Company":uc.CompanyName };
                    var table = new ConsoleTable("User Id", "User Name", "Mobile No.", "Company Name");
                    foreach (var i in result)
                    {
                        table.AddRow(i.Id, i.UserName, i.MobileNo, i.CompanyName);
                    }
                    Console.WriteLine(table);
                }


            }
            Console.ReadLine();
        }
    }
    class Employee
    {

        
        public int CompId;
        public string CompanyName;

        public Employee(int CompId, string CompanyName)
        {
            this.CompId = CompId;
            this.CompanyName = CompanyName;
        }
    }


}
