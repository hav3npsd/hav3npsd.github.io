import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constatns';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  public icons = IconList;
}
