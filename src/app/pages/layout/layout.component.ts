import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Component, inject, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenav } from '@angular/material/sidenav';
import { ThemeManagerService } from '../../theme-manager.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    MatTooltipModule,
    CommonModule,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss', './matertial-ui.component.scss'],
})
export class LayoutComponent {
  @ViewChild('drawer') drawer!: MatSidenav;

  public movieSvg = 'assets/icons/movie.svg';
  public topRateSvg = 'assets/icons/top-rating.svg';
  public upcomingSvg = 'assets/icons/popular.svg';
  public popularSvg = 'assets/icons/upcoming.svg';

  private breakpointObserver = inject(BreakpointObserver);
  private themeManager = inject(ThemeManagerService);
  theme = this.themeManager.theme;

  toggleTheme() {
    this.themeManager.toggleTheme();
    const isDarkTheme = this.theme() === 'dark';
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
