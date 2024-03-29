import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from '@pages/main/main.component';

import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
