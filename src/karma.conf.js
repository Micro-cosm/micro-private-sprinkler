// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-firefox-launcher'),
			require('karma-safari-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular-devkit/build-angular/plugins/karma')
		],
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, '../coverage'),
			reports: ['html', 'lcovonly'],
			fixWebpackSourcePaths: true
		},
		reporters: ['progress', 'kjhtml'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_ERROR,     // LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO, LOG_DEBUG
		autoWatch: true,
		browsers: ['Chrome', 'Firefox', 'Safari', 'ChromeHeadless', 'FirefoxHeadless'],
		customLaunchers: {
			FirefoxHeadless: {
				base: 'Firefox',
				flags: [
					'-headless',
					'--no-auto-watch',
					'--remote-debugging-port=9222'
				]
			},
			ChromeHeadless: {
				base: 'Chrome',
				flags: [
					'--headless',
					'--disable-gpu',
					'--no-sandbox',
					'--remote-debugging-port=9222'
				]
			},
		},
		flags: [ 'auto-watch' ],
		singleRun: true
	});
};
