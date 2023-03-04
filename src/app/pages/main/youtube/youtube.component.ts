import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent {
  public icons = IconList;
  public images = ImageList;
}
