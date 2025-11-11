import { JsonPipe } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [JsonPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit, DoCheck {
  @Input() childMessage: string = '';
  @Input() inputValue: string = '';
  @Input() user: any;

  previousValue: string | undefined;
  currentValue: string | undefined;

  ngOnInit(): void {
    console.log('inputValue in ngOnInit...', this.inputValue);
  }

  constructor(){
    console.log('InputValue in Constructor...', this.inputValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Calling from ngOnChanges...', changes);
    // console.log(this.childMessage);

    if(changes['childMessage']){
      this.previousValue = changes['childMessage'].previousValue;
      this.currentValue = changes['childMessage'].currentValue;
      console.log(changes);
    }
  }

  private previousUserObject: any = {};
  ngDoCheck(): void {
    if(this.user.name !== this.previousUserObject.name || this.user.age !== this.previousUserObject.age){
      console.log('User object has been changed:', this.user);
      this.previousUserObject = { ...this.user }; // Create a shallow copy of the user object
      console.log(JSON.parse(JSON.stringify(this.user)));
    }
  }

}
