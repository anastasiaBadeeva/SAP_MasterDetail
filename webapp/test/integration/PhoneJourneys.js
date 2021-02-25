/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"jetCources/MasterDetail/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"jetCources/MasterDetail/test/integration/pages/App",
	"jetCources/MasterDetail/test/integration/pages/Browser",
	"jetCources/MasterDetail/test/integration/pages/Master",
	"jetCources/MasterDetail/test/integration/pages/Detail",
	"jetCources/MasterDetail/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "jetCources.MasterDetail.view."
	});

	sap.ui.require([
		"jetCources/MasterDetail/test/integration/NavigationJourneyPhone",
		"jetCources/MasterDetail/test/integration/NotFoundJourneyPhone",
		"jetCources/MasterDetail/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});