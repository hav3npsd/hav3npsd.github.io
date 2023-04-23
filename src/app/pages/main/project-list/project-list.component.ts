import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MediaLink } from '@enums/mediaLink.enums';
import { Page } from '@enums/page.enums';

@Component({
  selector: 'main-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {
  mediaLink = MediaLink;
  page = Page;
}
