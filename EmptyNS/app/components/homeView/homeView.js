'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),
    // additional requires
	frameModule = require('ui/frame'),
	pageModule = require("ui/page"),
	webViewModule = require("ui/web-view"),
	stackLayoutModule = require("ui/layouts/stack-layout"),
    viewModel = require('./homeView-view-model'),
    addresses = [ 'http://www.google.com', 'http://www.telerik.com' ];

var factoryFunc = function (page) {
	page.content = new stackLayoutModule.StackLayout();
	for (var i = 0; i < 2; i++) {
		var webView = new webViewModule.WebView();
		webView.url = addresses[i];
		webView.webContentsDebuggingEnabled = true;
	    page.content.addChild(webView);
	}
    return page;
};

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
	
	factoryFunc(page);
}

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;