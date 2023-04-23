import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutMeComponent } from '@pages/main/about-me/about-me.component';
import { MainRoutingModule } from '@pages/main/main-routing.module';
import { MainComponent } from '@pages/main/main.component';
import { ProjectListComponent } from '@pages/main/project-list/project-list.component';
import { SpecialThanksComponent } from '@pages/main/special-thanks/special-thanks.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    AboutMeComponent,
    ProjectListComponent,
    SpecialThanksComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
