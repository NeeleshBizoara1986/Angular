import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { catchError, concatMap, delay, forkJoin, fromEvent, mergeMap, Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.css'
})
export class MergeMapComponent implements AfterViewInit {
@ViewChild('button') button!: any;
@ViewChild('output') output!: any;

click$!: Observable<any>;
count = 0;

constructor(private readonly http: HttpClient){}

ngAfterViewInit(): void {
  this.click$ = fromEvent(this.button.nativeElement, 'click');
  this.mergerMapExample();

  // https://medium.com/@gurunadhpukkalla/mergemap-vs-concatmap-vs-forkjoin-f2ce68acf154

  // of('photos', 'posts', 'users') //outer observable
  // .pipe(
  //   mergeMap((currentItem) => {
  //     const url = 'https://jsonplaceholder.typicode.com/' + currentItem;
  //     console.log(url);
  //     return this.http.get(url, { observe: 'body' }); //inner observable
  //   })
  // )
  // .subscribe((data) => {
  //   console.log(data);
  // });

  // of('photos', 'posts', 'users') //outer observable
  // .pipe(
  //   concatMap((currentItem) => {
  //     const url = 'https://jsonplaceholder.typicode.com/' + currentItem;
  //     console.log(url);
  //     return this.http.get(url, { observe: 'body' }); //inner observable
  //   })
  // )
  // .subscribe((data) => {
  //   console.log(data);
  // });

  // const endpoints = [1, 2, 3, 4].map(
  //   (item) => 'https://jsonplaceholder.typicode.com/posts/' + item
  // );

  // forkJoin(endpoints.map((url) => this.http.get(url))).subscribe((data) => {
  //   console.log(data);
  // });


// Simulating Service A with a 5-minute delay and an error
const serviceA$ = throwError(() => new Error('Error in Service A')).pipe(
  delay(30000),
  catchError(error => {
    console.log('Caught an error in Service A:', error);
    return throwError(() => new Error(error)); // Rethrow the error to simulate failure
  })
);

// Simulating Service B with a 10-minute delay
const serviceB$ = of('Response from Service B').pipe(delay(60000));

// Using forkJoin to combine both services
forkJoin([serviceA$, serviceB$]).subscribe(
  ([responseA, responseB]) => {
    console.log('Service A:', responseA);
    console.log('Service B:', responseB);
  },
  error => {
    console.log('Error in forkJoin:', error);
  }
);


}

mergerMapExample(){
  let obs = this.click$.pipe(mergeMap(() => {
    this.count = this.count + 1;
    return this.delayedObs(this.count)
  })).subscribe(data => {
    console.log(data);
    this.output.nativeElement.innerHTML = this.output.nativeElement.innerHTML+ '<br>' + data;
});
}

delayedObs(count: number){
  return new Observable((observer) => {
    setTimeout(() => { observer.next(count+" A") }, 1000);
    setTimeout(() => { observer.next(count+" B") }, 2000);
    setTimeout(() => { observer.next(count+" C") }, 3000);
    setTimeout(() => { observer.next(count+" D") }, 4000);
    setTimeout(() => { observer.next(count+" E"); observer.complete() }, 5000);
  })
}

}
