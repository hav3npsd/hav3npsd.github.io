import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AchievementsComponent } from './achievements/achievements.component';
import { IntroComponent } from './intro/intro.component';
import { NameComponent } from './name/name.component';
import { ProjectsComponent } from './projects/projects.component';
import { SpecialComponent } from './special/special.component';
import { WorkComponent } from './work/work.component';
import { YoutubeComponent } from './youtube/youtube.component';

@NgModule({
  declarations: [
    IntroComponent,
    NameComponent,
    AchievementsComponent,
    WorkComponent,
    ProjectsComponent,
    YoutubeComponent,
    SpecialComponent,
  ],
  imports: [CommonModule],
  exports: [
    IntroComponent,
    NameComponent,
    AchievementsComponent,
    WorkComponent,
    ProjectsComponent,
    YoutubeComponent,
    SpecialComponent,
  ],
})
export class MainModule {}
