import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MediaLink } from '@enums/mediaLink.enums';

@Component({
  selector: 'global-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  mediaLink = MediaLink;
}
