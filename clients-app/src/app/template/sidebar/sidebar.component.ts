import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  usernameAuthenticated: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  logout() {
    this.auth.logout();
  
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.usernameAuthenticated = this.auth.getAuthenticatedUser();
  }

}
