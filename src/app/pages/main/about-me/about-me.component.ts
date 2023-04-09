import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'main-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {}
