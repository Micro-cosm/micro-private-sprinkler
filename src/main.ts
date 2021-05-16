

import { environment			} from './environments/environment';
import { enableProdMode			} from '@angular/core';
import { platformBrowserDynamic	} from '@angular/platform-browser-dynamic';
import { AppModule				} from './app/app.module';

import './polyfills';

if ( environment.production ) enableProdMode();

platformBrowserDynamic().bootstrapModule( AppModule ).then( ref => {
	if ( window['ngRef'] ) window['ngRef'].destroy();																	// Ensure Angular destroys itself on hot reloads.
	window['ngRef'] = ref;
}).catch( e => console.error(e));
