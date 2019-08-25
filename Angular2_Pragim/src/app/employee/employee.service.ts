import { IEmployee} from './employee.model'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// import toPromise operator
//import 'rxjs/add/operator/toPromise';


@Injectable()
export class EmployeeService
{

  constructor(private _http: Http) { }


  getEmployees(): Observable<IEmployee[]> {
    return this._http.get('http://localhost:49993/api/employee')
      .map((response: Response) => <IEmployee[]>response.json())
      .catch(this.ErrorHandler/*(err: Response) => { console.log(err); return Observable.throw(err)}*/ );
  }

  getEmployee(code: string): Observable<IEmployee> {
    return this._http.get('http://localhost:49993/api/employee/' + code)
      .map((response: Response) => <IEmployee>response.json())
      .catch(this.ErrorHandler);
  }

  //In case we want to use Promise instead Observable
  //getEmployee(code: string): Promise<IEmployee> {
  //  return this._http.get('http://localhost:49993/api/employee/' + code)
  //    .map((response: Response) => <IEmployee>response.json())
  //    .toPromise()
  //    .catch(this.ErrorPromiseHandler);
  //}

  ErrorHandler(error : Response)
  {
    console.error(error);
    return Observable.throw(error);
  }

  ErrorPromiseHandler(error: Response){
    console.error(error);
    throw(error);
  }
}
