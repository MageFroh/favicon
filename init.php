<?php
class Favicon extends Plugin {

	function about() {
		return array(1.1,
			"Show unread count on favicon",
			"ZeGuigui, MageFroh");
	}

	function get_js() {
		$js1 = file_get_contents(dirname(__FILE__) . "/favicon.js");
		$js2 = file_get_contents(dirname(__FILE__) . "/init.js");
		return $js1 . "\n" . $js2;
	}

	function api_version() {
		return 2;
	}

}
?>
