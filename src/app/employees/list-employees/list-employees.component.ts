import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [ 
    {
    id: 1,
    name :'varadha',
    gender: 'male',
    phonenum: 1234,
     dateOfBirth: new Date(),
    isActive:true,
    photopath:'assets/images/varadha.jpg'
  },
  {
    id: 2,
    name :'sarath',
    gender: 'male',
    phonenum: 1234,
     dateOfBirth: new Date(),
    isActive:true,
    photopath:'assets/images/sarath.jpg'
  },
  {
    id: 3,
    name :'vijay',
    gender: 'male',
    phonenum: 1234,
     dateOfBirth: new Date(),
    isActive:true,
    photopath:'assets/images/vijay.jpg'
  },
];
  constructor() { }

  ngOnInit() {
  }

}
