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

            List<User> UserDetails = new List<User>();
            int Id = 1;
            while (true) { 
                Console.WriteLine("1. Add User");
                Console.WriteLine("2. Read User");
                Console.WriteLine("3. Update User");
                Console.WriteLine("4. Delete User");
                Console.WriteLine("5. Exit");
                Console.WriteLine();
                Console.Write("Enter Number which operation you want to perform: ");
                var num = Console.ReadLine();

                switch (num)
                {
                    case "1":
                        Console.Write("Enter Name: ");
                        var name = Console.ReadLine();
                        Console.Write("Enter MobileNo: ");
                        var number = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("User Added Successfully");
                        Console.WriteLine("---------------------------------------------------------------------------\n");
                        UserDetails.Add(new User(Id,name, number));
                        Id++;
                        break;
                    case "2":
                        Console.WriteLine();
                        var table = new ConsoleTable("User Id", "User Name", "Mobile No.");
                        foreach (var o in UserDetails)
                        {
                            table.AddRow(o.Id, o.UserName, o.MobileNo);
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
                            UserDetails[index].UserName = uname;
                            UserDetails[index].MobileNo = mnumber;
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
                            UserDetails.RemoveAt(userIndex);
                            Console.WriteLine("User Deleted Successfully");
                            Console.WriteLine("---------------------------------------------------------------------------\n");
                        }
                        break;

                    case "5":
                        Environment.Exit(0);
                        break;
                    default:
                        Console.WriteLine("Enter Valid Number");
                        Console.WriteLine();
                        break;

                }
            }
            Console.ReadLine();
        }
    }


}
