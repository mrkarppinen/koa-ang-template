import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import  "./../../node_modules/core-js/client/shim.min.js"
import  "./../../node_modules/zone.js/dist/zone.js";
import  "./../../node_modules/reflect-metadata/Reflect.js"
import  "./../../node_modules/rxjs/bundles/Rx.js"


import AppModule from './app-module';


(function() {
  document.addEventListener('DOMContentLoaded', function() {
      platformBrowserDynamic()
      .bootstrapModule(AppModule);
  });
})();
