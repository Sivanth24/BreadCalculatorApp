import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string = ''
  password: string = ''

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if(this.userName !== '' && this.password !== '') {
      this.authService.login();
      this.router.navigate(['/home']);
    } else {
      alert('Please enter valid credentials.');
   }
  }
}
