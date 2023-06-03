import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '@hav3npsd/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
