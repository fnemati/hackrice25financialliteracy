import { CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { 
  ForgeToolbarModule,
  ForgeButtonModule,
  ForgeAppBarModule,
} from '@tylertech/forge-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ForgeToolbarModule,
    ForgeButtonModule,
    ForgeAppBarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('financialLiteracy');
}