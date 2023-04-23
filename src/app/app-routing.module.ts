import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@pages/main/main.module').then((m) => m.MainModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

const extraOptions: ExtraOptions = {
  useHash: true,
  scrollPositionRestoration: 'top',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
