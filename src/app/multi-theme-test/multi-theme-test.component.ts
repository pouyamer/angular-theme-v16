import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-multi-theme-test',
  templateUrl: './multi-theme-test.component.html',
  styleUrls: ['./multi-theme-test.component.scss']
})
export class MultiThemeTestComponent {

  constructor(private themeService: ThemeService) {

  }

  protected changeTheme(theme: string) {
    this.themeService.changeTheme(theme);
  }
}
