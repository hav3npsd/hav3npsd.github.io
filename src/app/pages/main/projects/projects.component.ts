import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public icons = IconList;
  public images = ImageList;
}
