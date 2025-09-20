import { Component } from '@angular/core';
import { ForgeCardModule, ForgeTextFieldModule, ForgeButtonModule } from '@tylertech/forge-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ForgeCardModule, ForgeTextFieldModule, ForgeButtonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  username = '';
  password = '';
  isLoggedIn = false;

  login() {
    if (this.username && this.password) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }
}