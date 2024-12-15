import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { GlobalStateService } from '../../../services/global-state.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router, private globalState: GlobalStateService) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.globalState.clearRecords();
  }

}
