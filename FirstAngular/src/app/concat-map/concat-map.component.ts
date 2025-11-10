import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { catchError, concatMap, fromEvent, Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css'
})
export class ConcatMapComponent implements AfterViewInit {
  @ViewChild('button') button!: any;
  @ViewChild('output') output!: any;

  click$!: Observable<any>;
  count = 0;

  ngAfterViewInit(): void {
    this.click$ = fromEvent(this.button.nativeElement, 'click');
    this.concatMapExample();
  }

  concatMapExample() {
    let obs = this.click$.pipe(concatMap(() => {
      this.count = this.count + 1;
      return this.delayedObs(this.count)
    }), catchError(async (err) => console.log(err))).subscribe(data => {
      console.log(data);
      this.output.nativeElement.innerHTML = this.output.nativeElement.innerHTML + '<br>' + data;
    });
  }

  delayedObs(count: number) {
    return new Observable((observer) => {
      setTimeout(() => { observer.next(count + " A") }, 1000);
      setTimeout(() => { observer.next(count + " B") }, 2000);
      setTimeout(() => { observer.next(count + " C") }, 3000);
      setTimeout(() => { observer.next(count + " D") }, 4000);
      if(count === 2) {
        throwError(() => new Error('Error occur'))
      }
      setTimeout(() => { observer.next(count + " E"); observer.complete() }, 5000);
    })
  }

}
