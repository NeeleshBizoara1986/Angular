import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements AfterContentInit, AfterContentInit, AfterViewChecked, OnDestroy {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() was invoked...');
    console.log('ngAfterContentInit() - wrapper: ', this.wrapper);
    console.log('ngAfterContentInit() - content: ', this.content);
  }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck() was invoked...');
  //   console.log('ngDoCheck() - wrapper: ', this.wrapper);
  //   console.log('ngDoCheck() - content: ', this.content);
  // }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() was invoked...');
    const divElement = this.wrapper.nativeElement as HTMLElement;
    divElement.style.border = '2px solid red';
    divElement.style.padding = '10px';
    divElement.style.color = 'maroon';
    divElement.style.fontSize = '15px';
    divElement.style.fontWeight = '300';
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() was invoked...');
  }

  ngOnDestroy(): void {
    console.log('ngDestroy() was invoked...');
  }

}
