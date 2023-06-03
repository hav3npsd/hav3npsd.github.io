import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@pages/main/main.module').then((m) => m.MainModule),
  },
];
