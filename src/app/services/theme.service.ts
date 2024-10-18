import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSource = new BehaviorSubject<string>('theme1');
  currentTheme$ = this.themeSource.asObservable();

  constructor() { }

  getTheme() {
    return this.currentTheme$;
  }

  changeTheme(theme: string) {
    this.themeSource.next(theme);
    console.log(`theme changed to ${theme}`);
  }
}