import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';   // ngModel, ngForm
import { FooterComponent } from '../../footer/footer.component';
import { WhatsappWidgetComponent } from '../../whatsapp/whatsapp-widget.component';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FooterComponent, WhatsappWidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  activeMenu: string = 'home';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects.split('/').pop();
        this.activeMenu = currentRoute || 'home';
      }
    });
  }

  navigate(menu: string) {
    this.activeMenu = menu;
    this.router.navigate([`/customer/${menu}`]);
  }

  logout() {
    // Remove user session or token
    localStorage.removeItem('authToken'); // if you store JWT
    sessionStorage.clear(); // clear session storage

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
