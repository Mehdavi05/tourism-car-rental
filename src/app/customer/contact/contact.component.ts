import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // ngModel, ngForm
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = { name: '', email: '', message: '' };
  submitted = false;

  constructor() { }

  ngOnInit(): void { }

  submitContact() {
    this.submitted = true;
    console.log('Contact form submitted', this.contact);
    this.contact = { name: '', email: '', message: '' };
  }
}
