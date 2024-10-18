import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-multi-theme-test',
  templateUrl: './multi-theme-test.component.html',
  styleUrls: ['./multi-theme-test.component.scss']
})
export class MultiThemeTestComponent {
  themeIndex: number = 1;

  constructor(private themeService: ThemeService) {
    themeService.currentTheme$.subscribe((theme) => {
      this.themeIndex = parseInt(theme.replace('theme', ''));
      console.log(`theme index: ${this.themeIndex}`);
    })
  }

  protected changeTheme() {
    this.themeIndex = ((this.themeIndex + 1) % 4);
    this.themeService.changeTheme('theme' + this.themeIndex);
  }
}
