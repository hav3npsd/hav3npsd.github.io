import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constants';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  public icons = IconList;
}
