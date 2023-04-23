import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '@pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, title: 'hav3n - razoom designer' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
