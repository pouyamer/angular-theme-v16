import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSource = new BehaviorSubject<string>('theme1');
  currentTheme$ = this.themeSource.asObservable();

  changeTheme(theme: string) {
    this.themeSource.next(theme);
  }
}