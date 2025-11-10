import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, Signal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { IPost } from '../model';
import { PostService } from '../app.service';

@Component({
  selector: 'app-first',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{
  title = 'firstAngular';
  post$!: Observable<IPost[]>
  count = signal<number>(0);
  x = signal<number>(0);
  y = signal<number>(0);
  isLoggedIn = signal<boolean>(true);
  role = 'admin';
  sum: Signal<number> = computed(() => this.x() + this.y());
  subject = new Subject<number>();
  behaviourSubject = new BehaviorSubject<number>(0);
  
  constructor(private readonly postService: PostService){}
  
  ngOnInit(): void {
    this.count.set(1);
    // throw(new Error('Failed to get Data'))
    this.post$ = this.postService.getPost();
    this.subject.subscribe((data) => {
      console.log('Subscriber 1', data);
    })
    this.behaviourSubject.subscribe(data => console.log('Behaviour Subject 1, ', data))
  }
  
  addCounter(){
    this.count.update(() => this.count() + 1);
    this.x.update(() => this.x() + 1);
    this.y.update(() => this.y() + 1);
    // this.sum = computed(() => this.x() + this.y())
    console.log(this.sum());

    this.subject.next(10);

    this.behaviourSubject.next(1);
    this.subject.subscribe(data => console.log('Subscriber 2', data))
    this.behaviourSubject.subscribe(data => console.log('Behaviour Subject 2 ', data));
  }

  onObservable() {
    const observable = new Observable((sub) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        sub.next(Math.random() * 99 + 1);
        if(count === 5) {
          sub.complete();
        }
      }, 1000)
      return () => clearInterval(interval);
    })

    observable.subscribe({
      next: (value) => console.log(`Recieved 1 ${value}`),
      complete: () => console.log('Complete 2')
    })
    observable.subscribe({
      next: (value) => console.log(`Recieved 2 ${value}`),
      complete: () => console.log('Complete 2')
    })
  }

  onSubject(){
    const subject = new Subject<number>();
    subject.next(0);
    subject.subscribe((data) => console.log('Subscriber 1', data));

    
    subject.subscribe((data) => console.log('Subscriber 2', data));

    subject.next(1);
    subject.next(2);
  }

  onReplaySubject() {
    const replaySubject = new ReplaySubject<number>(2) // Buffer size 2

    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);

    replaySubject.subscribe(data => console.log('Replay Subject Subscription 1' , data));
    console.log('--------------------')
    replaySubject.next(4);
    replaySubject.subscribe(data => console.log('Replay Subject Subscription 2' , data));
  }

  onAsyncSubject() {
    const asyncSubject = new AsyncSubject<number>();

    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.subscribe(data => console.log('Async Subject 1', data))
    asyncSubject.next(3);
    asyncSubject.next(4);
    asyncSubject.complete();


    asyncSubject.subscribe(data => console.log('Async Subject 2', data))
  }
}
