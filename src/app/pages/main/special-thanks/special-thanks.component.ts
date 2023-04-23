import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MediaLink } from '@enums/mediaLink.enums';

@Component({
  selector: 'main-special-thanks',
  templateUrl: './special-thanks.component.html',
  styleUrls: ['./special-thanks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialThanksComponent {
  mediaLink = MediaLink;
}
