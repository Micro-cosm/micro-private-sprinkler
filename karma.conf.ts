// Karma configuration file, see link for more information -- https://karma-runner.github.io/1.0/config/configuration-file.html

// const ChromiumRevision	= require( 'puppeteer/package.json' ).puppeteer.chromium_revision;
// const Downloader			= require( 'puppeteer/utils/ChromiumDownloader' );
// const revisionInfo		= Downloader.revisionInfo( Downloader.currentPlatform(), ChromiumRevision );
// process.env.CHROME_BIN	= revisionInfo.executablePath;

module.exports = function( config ) {
	config.set({
		browsers:			['Chrome'],
		customLaunchers:	{ ChromeHeadlessNoSandbox: {
			base: 'ChromiumHeadless', flags: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-software-rasterizer']
		}},
		basePath:			'',
		frameworks:			['jasmine', '@angular-devkit/build-angular'],
		plugins:			[
			require( 'karma-jasmine' ),
			require( 'karma-chrome-launcher' ),
			require( 'karma-jasmine-html-reporter' ),
			require( 'karma-coverage-istanbul-reporter' ),
			require( '@angular-devkit/build-angular/plugins/karma' )
		],
		client: { clearContext: false },			 																	// leave Jasmine Spec Runner output visible in browser
		coverageIstanbulReporter: {
			dir:					require( 'path' ).join( __dirname, './coverage/ng-unit-test' ),
			reports:				['html', 'lcovonly', 'text-summary'],
			fixWebpackSourcePaths:	true
		},
		reporters:				['progress', 'kjhtml'],
		port:					9876,
		colors:					true,
		logLevel:				config.LOG_DEBUG,
		autoWatch:				true,
		singleRun:				false,
		restartOnFileChange:	true
	})
};
