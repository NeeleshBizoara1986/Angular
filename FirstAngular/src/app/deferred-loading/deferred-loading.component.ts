import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyChartComponent } from "./heavy-chart/heavy-chart.component";
//import { HeavyChartComponent } from './heavy-chart.component';

@Component({
  selector: 'app-deferred-loading',
  standalone: true,
  imports: [CommonModule, HeavyChartComponent],
  template: `
    <div class="container">
      <h2>Incremental Hydration Demo</h2>
      
      <!-- Immediately loaded content -->
      <section class="immediate-content">
        <h3>Immediately Loaded Content</h3>
        <p>This content is available instantly because it's critical for the user.</p>
      </section>

      <!-- Deferred on viewport -->
      <section class="deferred-section">
        @defer (on viewport) {
          <app-heavy-chart />
          <p>This chart was loaded when it entered the viewport!</p>
        } @placeholder {
          <div class="placeholder">
            Chart will load when scrolled into view...
          </div>
        } @loading {
          <div class="loading">
            Loading chart...
          </div>
        }
      </section>

      <!-- Deferred on interaction -->
      <section class="deferred-section">
        @defer (on interaction) {
          <app-heavy-chart />
          <p>This chart was loaded after user interaction!</p>
        } @placeholder {
          <button #trigger class="load-button">
            Click to load another chart
          </button>
        } @loading {
          <div class="loading">
            Loading chart...
          </div>
        }
      </section>

      <!-- Deferred on hover -->
      <section class="deferred-section">
        @defer (on hover) {
          <app-heavy-chart />
          <p>This chart was loaded after hovering!</p>
        } @placeholder {
          <div class="placeholder hover-trigger">
            Hover here to load the chart...
          </div>
        } @loading {
          <div class="loading">
            Loading chart...
          </div>
        }
      </section>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .deferred-section {
      margin: 40px 0;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 8px;
    }

    .placeholder {
      padding: 40px;
      background: #f5f5f5;
      border-radius: 8px;
      text-align: center;
      cursor: pointer;
    }

    .hover-trigger {
      background: #e9ecef;
      transition: background-color 0.3s;
    }

    .hover-trigger:hover {
      background: #dee2e6;
    }

    .loading {
      padding: 20px;
      text-align: center;
      color: #666;
    }

    .load-button {
      padding: 10px 20px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .load-button:hover {
      background: #0056b3;
    }
  `]
})
export class DeferredLoadingComponent {}
