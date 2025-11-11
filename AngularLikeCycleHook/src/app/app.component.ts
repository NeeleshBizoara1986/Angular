import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, DoCheck {
  title = 'AngularLikeCycleHook';
  parentValue: string = 'Hello from Parent Component';
  counter:number = 0;
  counterInterval:any;
  items = ['Item 1', 'Item 2', 'Item 3'];
  perviousItems: string[] = [...this.items];

  user = {
    name: 'John Doe',
    age: 30
  };

  changeUserName(newName: string) {
    this.user.name = newName;
  }

  ngDoCheck(): void {
    if(this.items.length !== this.perviousItems.length ||
      this.items.some((item, index) => item !== this.perviousItems[index])){
        console.log('Items array has been changed:', this.items);
        this.perviousItems = [...this.items];
      }
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  startCounter(){
    this.counterInterval = setInterval(()=>{
      if(this.counter <= 5){
      this.counter++;
      console.log(this.counter);
      } else {
        clearInterval(this.counterInterval);
      }
    },1000);
  }

  constructor(){
    console.log('Calling from Constructor...', this.title);
    this.startCounter();
  }

  ngOnInit(): void {
    // console.log('Calling from ngOnInit...');
    console.log('Component has been Initilized...');
    // this.startCounter();
  }

  updateValue(){
    // this.title = 'Updated Title';
    this.title = 'First Update';
    this.title = 'Second Update';
    this.title = 'Third Update';
  }
}
