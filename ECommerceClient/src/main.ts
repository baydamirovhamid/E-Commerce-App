import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable, lastValueFrom } from 'rxjs';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));


declare module "rxjs" {
  interface Observable<T> {
    toPromise(): Promise<T | undefined>;
  }
}

Observable.prototype.toPromise = function <T>(this: Observable<T>): Promise<T> {
  return lastValueFrom(this);
};
