// Karma configuration
// Generated on Sun Aug 17 2014 22:08:03 GMT-0400 (EDT)
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../..',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'war/bower_components/angular/angular.js',
            'war/bower_components/angular-mocks/angular-mocks.js',
            'war/bower_components/angular-route/angular-route.js',
            'war/bower_components/angular-sanitize/angular-sanitize.js',
            'war/bower_components/angular-aria/angular-aria.js',
            'war/bower_components/angular-animate/angular-animate.js',
            'war/bower_components/angular-material/angular-material.js',
            'war/app/boomerang.module.js',
            'war/app/**/*.js',
            'test/unit/**/*.js'
        ],

        // list of files to exclude
        exclude: [ 'test/unit/karma.conf.js' ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome',
            'ChromeCanary',
            'Firefox',
            'Safari',
            'PhantomJS'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
