import { Component, signal, computed, effect, OnDestroy, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { map, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="signals-container">
      <div class="signals-section">
        <h2>Signals Example (Efficient Updates)</h2>
        <div class="counter">
          <div class="state-display">
            <p>Base Price: {{ basePrice() }}</p>
            <p>Quantity: {{ quantity() }}</p>
            <p>Discount: {{ discount() }}%</p>
            <p class="total">Total Price: \${{ totalPrice() }}</p>
          </div>
          <div class="actions">
            <button (click)="updatePrice(basePrice() + 10)">Increase Price</button>
            <button (click)="updateQuantity(quantity() + 1)">Add Item</button>
            <button (click)="updateDiscount(discount() + 5)">Increase Discount</button>
          </div>
        </div>
      </div>

      <div class="signals-section">
        <h2>Observable Example (Traditional)</h2>
        <div class="counter">
          <div class="state-display">
            <p>Base Price: {{ (observablePrice$ | async) || 0 }}</p>
            <p>Quantity: {{ (observableQuantity$ | async) || 0 }}</p>
            <p>Discount: {{ (observableDiscount$ | async) || 0 }}%</p>
            <p class="total">Total Price: \${{ observableTotalPrice$ | async }}</p>
          </div>
          <div class="actions">
            <button (click)="updateObservablePrice()">Increase Price</button>
            <button (click)="updateObservableQuantity()">Add Item</button>
            <button (click)="updateObservableDiscount()">Increase Discount</button>
          </div>
        </div>
      </div>

      <div class="performance-metrics">
        <h3>Update Metrics</h3>
        <p>Signal Updates: {{ updateCount() }}</p>
        <p>Observable Emissions: {{ observableUpdateCount() }}</p>
      </div>
    </div>
  `,
  styles: [`
    .signals-container {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .signals-section {
      flex: 1;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background: #f8f9fa;
    }
    .counter {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .state-display {
      background: white;
      padding: 15px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .actions {
      display: flex;
      gap: 10px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .total {
      font-size: 1.2em;
      font-weight: bold;
      color: #28a745;
    }
    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    button:hover {
      background-color: #0056b3;
    }
    .performance-metrics {
      padding: 15px;
      background: #e9ecef;
      border-radius: 6px;
      margin-top: 20px;
    }
    .performance-metrics h3 {
      margin-top: 0;
      color: #495057;
    }
  `]
})
export class SignalsApiDemoComponent implements OnDestroy {
  // Signals for efficient state management
  basePrice = signal(100);
  quantity = signal(1);
  discount = signal(0);
  updateCount = signal(0);

  // Computed values with automatic dependency tracking
  totalPrice = computed(() => {
    const subtotal = this.basePrice() * this.quantity();
    const discountAmount = subtotal * (this.discount() / 100);
    return +(subtotal - discountAmount).toFixed(2);
  });

  // RxJS Subjects for traditional state management
  private priceSubject = new BehaviorSubject<number>(100);
  private quantitySubject = new BehaviorSubject<number>(1);
  private discountSubject = new BehaviorSubject<number>(0);
  private observableUpdatesSubject = new BehaviorSubject<number>(0);

  // Observable streams
  observablePrice$ = this.priceSubject.asObservable();
  observableQuantity$ = this.quantitySubject.asObservable();
  observableDiscount$ = this.discountSubject.asObservable();
  observableUpdateCount = signal(0);

  // Complex observable computation
  observableTotalPrice$ = combineLatest([
    this.observablePrice$,
    this.observableQuantity$,
    this.observableDiscount$
  ]).pipe(
    debounceTime(0), // Simulate processing time
    map(([price, quantity, discount]) => {
      const subtotal = price * quantity;
      const discountAmount = subtotal * (discount / 100);
      return +(subtotal - discountAmount).toFixed(2);
    }),
    distinctUntilChanged()
  );

  private subscription = this.observableTotalPrice$.subscribe(() => {
    this.observableUpdateCount.update(count => count + 1);
  });

  constructor() {
    // Effect for tracking signal updates with performance monitoring
    effect(() => {
      // Use untracked to prevent counting the read of totalPrice as a dependency
      untracked(() => {
        if (this.totalPrice() !== undefined) {
          this.updateCount.update(count => count + 1);
        }
      });
    });
  }

  // Signal updates - synchronous and efficient
  updatePrice(newPrice: number) {
    this.basePrice.set(newPrice);
  }

  updateQuantity(newQuantity: number) {
    this.quantity.set(newQuantity);
  }

  updateDiscount(newDiscount: number) {
    this.discount.set(Math.min(newDiscount, 100));
  }

  // Observable updates - more verbose and async
  updateObservablePrice() {
    this.priceSubject.next(this.priceSubject.value + 10);
  }

  updateObservableQuantity() {
    this.quantitySubject.next(this.quantitySubject.value + 1);
  }

  updateObservableDiscount() {
    const newDiscount = Math.min(this.discountSubject.value + 5, 100);
    this.discountSubject.next(newDiscount);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}