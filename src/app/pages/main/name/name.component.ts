import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent {
  public images = ImageList;
}
