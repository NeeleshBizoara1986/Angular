import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  // @ViewChild('wrapper', { static: true }) wrapper: any;
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngDoCheck(): void {
    console.log('DoCheck from Test Component...');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() was invoked...');
    console.log('ngAfterContentInit() - wrapper: ', this.wrapper);
    console.log('ngAfterContentInit() - content: ', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() was invoked...');
    console.log('ngAfterContentChecked() - wrapper: ', this.wrapper);
    console.log('ngAfterContentChecked() - content: ', this.content);
  }

  ngAfterViewInit(): void {
    debugger;
    console.log('ngAfterViewInit() was invoked...');
    if (this.wrapper) {
      console.log('ngAfterViewInit() - wrapper: ', this.wrapper);

      const divElement = this.wrapper.nativeElement as HTMLElement;
      divElement.style.border = '2px solid red';
      divElement.style.padding = '10px';
      divElement.style.color = 'maroon';
      divElement.style.fontSize = '15px';
      divElement.style.fontWeight = '300';
    }
  }
}
