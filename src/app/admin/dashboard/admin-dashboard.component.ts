import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  activeMenu: string = 'overview';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects.split('/').pop();
        this.activeMenu = currentRoute || 'overview';
      }
    });
  }

  navigate(menu: string) {
    this.activeMenu = menu;
    this.router.navigate([`/admin/${menu}`]);
  }

  logout() {
    // Remove user session or token
    localStorage.removeItem('authToken'); // if you store JWT
    sessionStorage.clear(); // clear session storage

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
