import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {Employee} from './employee';
import { HttpClient } from  '@angular/common/http';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
}




)
export class EmployeeService {

   
  private apiServerUrl = environment.apiBaseUrl ; //URL ml back fi environment.ts 6060 
    
    constructor(private http: HttpClient){ }
    
    public getEmployees(): Observable<Employee[]>{
        return this.http.get<Employee[]>('${this.apiServiceUrl}/employee/all',);
    }

    /**public addEmployee(employee : Employee) : Observable<Employee>{
        return this.http.post<Employee>('${this.apiServiceUrl}/employee/add', employee);
    }

    public updateEmployee(employee : Employee) : Observable<Employee>{
        return this.http.put<Employee>('${this.apiServiceUrl}/employee/update', employee);
    }

    public deleteEmployee(employeeid : number) : Observable<void>{
        return this.http.delete<void>('${this.apiServiceUrl}/employee/delete/${employeeId}');
    }**/
    

}
