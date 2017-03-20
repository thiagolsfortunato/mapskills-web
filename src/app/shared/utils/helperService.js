(function() {
	'use strict';

	angular
		.module('mapskillsWeb')
		.service('HelperService', HelperService);

		/** @ngInject */
		function HelperService() {
			this.getFullRestApi = function(uri) {
				//return "http://localhost:8585/mapskills".concat(uri);
        return "http://127.0.0.1:8585/mapskills".concat(uri);
      }

			this.isUndefinedOrNull = function(arg) {
				return angular.isUndefined(arg) || arg === null;
			}
		}
})();
