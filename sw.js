'use strict';

importScripts('sw-toolbox.js'); 
toolbox.precache(['index.html','dist/style.css']); 
toolbox.router.get('dist/images/*', toolbox.cacheFirst); 
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});