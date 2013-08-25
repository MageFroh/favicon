(function() {
	var checkTitle = function() {
		var count = document.title.match(/\((\d+)\)/);
		
		if(count) {
			console.log("Favicon: new unread count: " + count[1]);
			favicon.badge(count[1]);
		} else {
			console.log("Favicon: no unread article");
			favicon.badge();
		}

		return true;
	}

	var init = function() {
		console.log("Favicon: init");
                PluginHost.register(PluginHost.HOOK_RUNTIME_INFO_LOADED,  checkTitle);
                PluginHost.register(PluginHost.HOOK_ARTICLE_RENDERED,     checkTitle);
                PluginHost.register(PluginHost.HOOK_ARTICLE_RENDERED_CDM, checkTitle);
	}

	init();
})();
