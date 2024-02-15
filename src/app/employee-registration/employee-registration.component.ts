import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit  {

  departments: any[]= [];
  employeeList: any[]=[];
  
  isListView: boolean = true;
  
  employeeObject: any ={
    "firstName":"",
    "lastName": "", 
    "departmentId": "",
    "gender":"",
    "email":"",
    "phoneNo":""
  }
  $http: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
  }

  loadDepartments() {
    this.http.get("assets/departments.json").subscribe((res:any)=>{ 
      this.departments =  res.data;
    })
  }

  loadEmployees() {
    this.http.get("assets/getEmployee.json").subscribe((res: any)=>{
      this.employeeList = res.data;
    })
  }

  onCreateEmp() {
    debugger;
    // this.http.post("assets/postEmployee.json", this.employeeObject).subscribe((res:any)=>{
    //   alert(res.message)
    // });

      
      this.http.put<any>('assets/postEmployee.json'," ")
          .subscribe(data => this.employeeObject = data.id);


    // this.$http.get('assets/getEmployee.json')
    // .then( (res:any) => {
    //     res.data.push(this.employeeList);
    //     // Save this new res.data to db/performs.json
    // });
    
    // this.employeeList
    // .addEmployee(newEmployee)
    // .subscribe(employee => this.employees.push(employee));
    // this.http.get("assets/postEmployee.json").subscribe((res:any)=>{
    //   alert(res.message)
    //   this.loadEmployees();
    // });
  }

  onEdit(item: any) { 
    this.employeeObject = item;
    this.isListView = false;
  }
  onDelete(item: any) {

  }

}
