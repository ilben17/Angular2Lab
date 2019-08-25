using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularWebApiService.Controllers
{
  public class EmployeeController : ApiController
  {
    public IEnumerable<Employees> Get()
    {
      using (var db = new DB_Angular2Entities())
      {
        return db.Employees.ToList();
      }
    }

    public Employees Get(string code)
    {
      using (var db = new DB_Angular2Entities())
      {
        return db.Employees.Where(_ => _.code.Equals(code)).FirstOrDefault();
      }
    }
  }
}
