import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from './app-module';


(function() {
  document.addEventListener('DOMContentLoaded', function() {
      platformBrowserDynamic()
      .bootstrapModule(AppModule);
  });
})();
