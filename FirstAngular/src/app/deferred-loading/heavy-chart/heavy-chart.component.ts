import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chart-container">
      <h3>Complex Chart Component</h3>
      <div class="chart">
        <!-- Simulating a heavy chart component -->
        <div class="chart-content">
          <div *ngFor="let item of chartData" class="bar" 
               [style.height.px]="item">
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .chart-container {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 20px 0;
    }
    .chart {
      height: 200px;
      display: flex;
      align-items: flex-end;
      gap: 4px;
    }
    .bar {
      width: 20px;
      background: #007bff;
      transition: height 0.3s;
    }
  `]
})
export class HeavyChartComponent implements OnInit {
  chartData: number[] = [];

  ngOnInit() {
    // Simulate heavy data processing
    console.log('Heavy Chart Component Loaded!');
    this.chartData = Array.from({length: 20}, () => 
      Math.floor(Math.random() * 150) + 50
    );
  }
}
