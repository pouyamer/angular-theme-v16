import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiThemeTestComponent } from './multi-theme-test.component';

describe('MultiThemeTestComponent', () => {
  let component: MultiThemeTestComponent;
  let fixture: ComponentFixture<MultiThemeTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiThemeTestComponent]
    });
    fixture = TestBed.createComponent(MultiThemeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
