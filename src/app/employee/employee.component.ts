import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [StudentComponent,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  inputs:['Pdata'],
  outputs:['valueChanged']

})
export class EmployeeComponent  {

  @Input() item = ''; 
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() removeItemEvent = new EventEmitter<string>();

  // @Input() isChildVisible: boolean=false
// senddata(val:any){
// console.log(" fhds",val);
// }
addNewItem(value: any) {
  this.newItemEvent.emit(value);
}
remNewItem(itemToRemove: string) {
  console.log("refldj",itemToRemove);
  this.removeItemEvent.emit(itemToRemove);
}
// @Output() valueChanged = new EventEmitter<any>();
//  valueChanged = new EventEmitter<any>();

// xyz(){
//   this.isChildVisible=false;
//   this.valueChanged.emit(false);
// }
// onInputChange(event: Event) {
//   const value = (event.target as HTMLInputElement)?.value;
//   if (value !== undefined) {
//     console.log("value", value);
//     this.valueChanged.emit(false);
//   }
// }
}
