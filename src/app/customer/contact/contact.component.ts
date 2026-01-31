import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact = {
    name: '',
    email: '',
    phone: '',    // optional
    message: ''
  };

  loading = false;
  successMessage = '';
  errorMessage = '';

  submitContact(form: NgForm) {
    if (form.invalid) return;

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    // 1️⃣ Send Admin Notification
    emailjs.send(
      'service_47exj0d',
      'template_tfc9ioi',
      {
        from_name: this.contact.name,
        from_email: this.contact.email,
        phone: this.contact.phone,
        message: this.contact.message
      },
      '8vhLbNSXbGH_kunF1'
    )
    .then(() => {
      // 2️⃣ Send Auto-Reply to Customer
      return emailjs.send(
        'service_47exj0d',
        'template_0ml80io',
        {
          from_name: this.contact.name,
          from_email: this.contact.email,
          message: this.contact.message
        },
        '8vhLbNSXbGH_kunF1'
      );
    })
    .then(() => {
      this.successMessage = 'Your message has been sent successfully!';
      this.loading = false;
      form.resetForm();
    })
    .catch((err) => {
      console.error(err);
      this.errorMessage = 'Failed to send message. Please try again.';
      this.loading = false;
    });
  }
}
