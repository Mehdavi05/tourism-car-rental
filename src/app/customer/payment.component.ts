import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  template: `
    <h3>Payment</h3>
    <button (click)="pay()">Pay with Card</button>
  `
})
export class PaymentComponent {
  constructor(private http: HttpClient) {}

  pay() {
    this.http.post('http://localhost:5000/api/payments/intent', {})
      .subscribe(res => console.log(res));
  }
}
