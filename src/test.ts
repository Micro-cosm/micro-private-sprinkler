

import 'zone.js/testing';

import {	getTestBed						} from '@angular/core/testing';
import {	BrowserDynamicTestingModule,
			platformBrowserDynamicTesting	} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

getTestBed().initTestEnvironment( BrowserDynamicTestingModule, platformBrowserDynamicTesting());		// Init env

const context = require.context( './', true, /\.spec\.ts$/ );											// Find tests

context.keys().map( context );																	// Load modules
