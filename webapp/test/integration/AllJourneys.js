/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 zjblessons_base_Materials in the list

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
		"jetCources/MasterDetail/test/integration/MasterJourney",
		"jetCources/MasterDetail/test/integration/NavigationJourney",
		"jetCources/MasterDetail/test/integration/NotFoundJourney",
		"jetCources/MasterDetail/test/integration/BusyJourney",
		"jetCources/MasterDetail/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});