import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTheme = 'theme1';

  switchTheme() {
    this.currentTheme = this.currentTheme === 'theme1' ? 'theme2' : 'theme1';
  }
}
