import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {
  catchError,
  debounceTime,
  fromEvent,
  interval,
  map,
  of,
  switchMap,
  take,
} from 'rxjs';
import { MergeMapComponent } from '../merge-map/merge-map.component';
import { isPlatformBrowser } from '@angular/common';
import { ConcatMapComponent } from '../concat-map/concat-map.component';

@Component({
  selector: 'app-second',
  imports: [MergeMapComponent, ConcatMapComponent],
  standalone: true,
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent implements OnInit {
  items: any = [1, 2, 3, 4];

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    // private http: HttpClient
  ) {
    // interval(1000).pipe(
    //   switchMap((value) => {
    //     console.log(`Outer Value  ${value}`)
    //     return interval(500).pipe(take(1))
    //   })
    // ).subscribe(data => console.log(data))
  }
  private http: HttpClient = inject(HttpClient);
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const searchBox = document.querySelector('#search') as HTMLInputElement;
      console.log(searchBox);
      fromEvent(searchBox, 'input')
        .pipe(
          debounceTime(3000),
          map((event: any) => event.target.value),
          switchMap((query: any) => {
            return this.http
              .get<string[]>(`https://api.mocki.io/v1/0350b5d5?search=${query}`)
              .pipe(catchError(() => of([])));
          })
        )
        .subscribe((data) => (this.items = data));
    }
  }
}
