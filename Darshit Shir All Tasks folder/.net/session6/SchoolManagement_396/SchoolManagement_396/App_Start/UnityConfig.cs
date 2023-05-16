using System.Web.Mvc;
using Unity;
using Unity.Mvc5;
using SchoolManagement_396.Repositories.Repository;
using SchoolManagement_396.Repositories.Services;
namespace SchoolManagement_396
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            container.RegisterType<ILoginRepository, LoginServices>();
            container.RegisterType<IRegisterRepository, RegisterServices>();
            container.RegisterType<ICountryRepository, CountryServices>();
            container.RegisterType<IStatesRepository, StatesServices>();
            container.RegisterType<ICityRepository, CityServices>();
            container.RegisterType<ITeacherRepository, TeacherServices>();
            container.RegisterType<ISubjectRepository, SubjectServices>();
            container.RegisterType<IStudentRepository, StudentServices>();
            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}