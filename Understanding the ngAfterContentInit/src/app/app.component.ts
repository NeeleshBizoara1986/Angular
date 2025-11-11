import { AfterContentInit, Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  dataFromParent: string = '';
  value: string = 'Initail Value';

  displayTestComponent: boolean = true;

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit() hook was invoked...');
  // }
  ngDoCheck(): void {
    console.log('ngDoCheck() hook was invoked...');
  }

  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = 'Random number: ' + random;
  }

  stopInterval: any;
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() checking phase...');
    this.stopInterval = setInterval(() => {
      this.value = 'Value changed in ngAfterViewInit() hook';
      console.log('view updated...');
      clearInterval(this.stopInterval)
    }, 1000);
  }
}
