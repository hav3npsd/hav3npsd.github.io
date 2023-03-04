import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss'],
})
export class SpecialComponent {
  public images = ImageList;
}
