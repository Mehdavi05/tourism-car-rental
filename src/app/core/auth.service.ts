import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:5262/api/auth';

  constructor(private http: HttpClient) {}

  login(username: string, role: string) {
  return this.http.post<any>(
    'http://localhost:5262/api/auth/login',
    { username, role }
  );
}
}
