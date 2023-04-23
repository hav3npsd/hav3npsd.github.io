import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Page } from '@enums/page.enums';
import { Subscription } from 'rxjs';
@Component({
  selector: 'global-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  currentUrl?: string;
  page = Page;

  get showHomeButton(): boolean {
    return this.currentUrl === Page.MAIN ? false : true;
  }

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;
      this.currentUrl = event.urlAfterRedirects;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
