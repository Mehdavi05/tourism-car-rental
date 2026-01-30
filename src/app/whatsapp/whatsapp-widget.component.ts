import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-whatsapp-widget',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './whatsapp-widget.component.html',
  styleUrls: ['./whatsapp-widget.component.css']
})
export class WhatsappWidgetComponent {

  showOptions = false;

  toggle() {
    this.showOptions = !this.showOptions;
  }

  openChat(number: string) {
    // Open WhatsApp chat in a new tab
    window.open(`https://wa.me/${number}`, '_blank');
    this.showOptions = false; // optional: close popup after clicking
  }
}
