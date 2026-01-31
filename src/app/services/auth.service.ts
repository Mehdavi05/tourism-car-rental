import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

export interface LoginResponse {
  token: string;
}

export interface JwtPayload {
  sub: string;     // usually email or username
  role: string;
  exp: number;
  iat: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5262/api'; // Backend URL

  constructor(private http: HttpClient) {}

  /**
   * Login for admin user
   */
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, { email, password });
  }

  /**
   * Get stored JWT token
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Decode JWT token to get payload
   */
  getTokenPayload(): JwtPayload | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<JwtPayload>(token);
    } catch (err) {
      console.error('Invalid JWT token', err);
      return null;
    }
  }

  /**
   * Get logged-in username/email
   */
  getUsername(): string | null {
    const payload = this.getTokenPayload();
    return payload?.sub || null;
  }

  /**
   * Get logged-in user role
   */
  getRole(): string | null {
    const payload = this.getTokenPayload();
    return payload?.role || null;
  }

  /**
   * Check if user is logged in
   */
  isLoggedIn(): boolean {
    const payload = this.getTokenPayload();
    if (!payload) return false;
    const now = Date.now().valueOf() / 1000;
    return payload.exp > now;
  }

  /**
   * Logout user
   */
  logout(): void {
    localStorage.removeItem('token');
  }

  /**
   * HTTP headers with JWT token for protected requests
   */
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
  }
}
