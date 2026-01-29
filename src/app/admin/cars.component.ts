import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h3>Manage Cars</h3>
    <table>
      <tr><th>Name</th><th>Price</th></tr>
      <tr><td>Toyota</td><td>$50/day</td></tr>
    </table>
  `
})
export class CarsComponent {}
