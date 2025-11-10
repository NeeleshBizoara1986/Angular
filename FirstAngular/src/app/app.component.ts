import { HttpClient } from '@angular/common/http';
import { Component, computed, OnInit, Signal, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IPost } from './model';
import { AsyncSubject, BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { PostService } from './app.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ControlFlowComponent } from "./control-flow/control-flow.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-demo';
  interpolationWithNull = null;
  interpolationWIthUndefined = undefined;

  protected a = 5; 
  protected b = 10;
  protected sum = this.a + this.b;

  constructor() {
  }
}
