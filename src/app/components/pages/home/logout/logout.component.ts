import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  standalone: true,
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router) { }

  logout(): void {
    // Perform logout operation, e.g., clear session, remove tokens, etc.
    // For demo purposes, let's just redirect to the login page
    this.router.navigate(['/login']);
  }

}
