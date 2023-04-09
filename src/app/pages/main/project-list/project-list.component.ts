import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'main-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {}
