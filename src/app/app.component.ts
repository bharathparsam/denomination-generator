import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  availableNotes = [1, 2, 5, 10, 20, 50, 100, 200, 500];
  requiredCurrencies = [];
  amount: Number;

  currencyMap = new Map();
/**
 * 
 * @param amount - get the amount entered
 */
  requiredCurrency(amount) {
    for (let i = this.availableNotes.length - 1; i >= 0 && amount; i--) {
      const qty = Math.floor(amount / this.availableNotes[i]);
      qty && this.currencyMap.set(this.availableNotes[i], qty);
      amount = amount % this.availableNotes[i];
    }

    const entries = Array.from(this.currencyMap.entries());
    this.requiredCurrencies = entries.map(
      ([curr, qty]) => `${curr} * ${qty} = ${curr * qty}`
    );
  }
}
