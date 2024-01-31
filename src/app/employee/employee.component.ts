import { Component } from '@angular/core';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [StudentComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  inputs:['Pdata']
})
export class EmployeeComponent {
Pdata:any;
}
