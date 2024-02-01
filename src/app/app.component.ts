import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-todolist';
  currentItem = 'Television';
  // childValue: string=''
  items:any[] = [];

  addItem(newItem: any) {
    this.items.push(newItem);
  }
  removeItem(itemToRemove: any) {
    console.log("ppp",itemToRemove)
    this.items = this.items.filter(item => item !== itemToRemove);
    // if (index !== 0) {
    //   this.items.splice(index, 0);
    // }
  }


  delete(index:number){

 console.log("index to delete:", index);
 if (index >= 0 && index < this.items.length) {
     this.items.splice(index, 1);
 } else {
     console.error("Invalid index:", index);
 }
 
  }
  // isChildOpen=false
  constructor(){
  console.log("constructor loaded in the compoentns");

    }



    // onValueChanged(value: any) {
    //   this.childValue = value;
    //   this.isChildOpen=value
    // }

    // @HostListener('click',['$event'])
    // show(){
    //   alert("hiiiiiiii guyzzz");
    // }

//     childBoxOpen(){
// this.isChildOpen=true
//     }
  }


