import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';
import { AnchorPath } from '@enums/anchorPath.enums';
import { ScrollService } from '@services/scroll.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  public icons = IconList;
  public anchorPath = AnchorPath;

  constructor(protected scrollService: ScrollService) {}
}
